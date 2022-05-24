const path = require("path")
const fs = require("fs")
// const env = require('cross-env')

const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const multer = require("multer")
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid")
const { graphqlHTTP } = require("express-graphql")

const graphqlSchema = require("./graphql/schema")
const graphqlResolver = require("./graphql/resolvers")
const auth = require("./middleware/auth")
const { clearImage } = require("./util/file")

const app = express()

const fileStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "images");
    },
    filename: function(req, file, cb) {
          cb(null, uuidv4().toString().replace(/:/g, '-') + "-" + file.originalname)
        // cb(null, uuidv4())

    }
});


// const fileStorage = multer.diskStorage({
//   destination: (res, file, cb) => {
//       cb(null, "images")
//   },
//   filename: (res, file, cb) => {
//       cb(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname)
//   }
// });


const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" || 
        file.mimetype === "image/jpg" || 
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"), 
  { flags: "a" }
)

app.use(helmet())
app.use(compression())
app.use(morgan("combined", { stream: accessLogStream }))


app.use(bodyParser.json()) // application/json
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
)
app.use("/images", express.static(path.join(__dirname, 'images')))
// console.log('okay', path.join(__dirname, "images"))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(auth);

app.put("/post-image", (req, res, next) => {
    if (!req.isAuth) {
        throw new Error("Not authenticated!")
    }
    if (!req.file) {
        return res.status(200).json({ message: "No file provided!" })
    }
    if (req.body.oldPath) {
        clearImage(req.body.oldPath)
    }
    return res
    .status(201)
    .json({ message: "File Stored.", filePath: req.file.path })
})

app.use(
    "/graphql", graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true,
        customFormatErrorFn(err) {
            if (!err.originalError) {
                return err
            }
            const data = err.originalError.data
            const message = err.message || "An error occured."
            const code = err.originalError.code || 500
            return { message: message, status: code, data: data }
        }
    })
)

// app.use(
//     "/graphql", (req, res) => {
//     graphqlHTTP({
//         schema: graphqlSchema,
//         rootValue: graphqlResolver,
//         graphiql: true,
//         customFormatErrorFn(err) {
//             if (!err.originalError) {
//                 return err
//             }
//             const data = err.originalError.data
//             const message = err.message || "An error occured."
//             const code = err.originalError.code || 500
//             return { message: message, status: code, data: data }
//         }
//     })(req, res)
//     })

app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data 
    res.status(status).json({ message: message, data: data })
})

mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tzocc.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`
    )
    .then(result => {
    app.listen(process.env.PORT || 5000)
    console.log('app is listening on 8080')
})
.catch(err => console.log(err))


