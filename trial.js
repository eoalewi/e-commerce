// 12-17
// const { graphqlHTTP } = require("express-graphql")

// const graphqlSchema = require("./graphql/schema")
// const graphqlResolver = require("./graphql/resolvers")
// const auth = require("./middleware/auth")
// const { clearImage } = require("./util/file")

// 57
// app.use(bodyParser.urlencoded()) // x-www-form-urlencoded <form>

//  65-73
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Methods",  "GET, POST, OPTIONS, PUT, PATCH, DELETE")
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
//     if (req.method === "OPTIONS") {
//         return res.sendStatus(200)
//     }
//     next()
// })

// 90-140
// app.use(auth) 

// app.put("/post-image", (req, res, next) => {
//     if (!req.isAuth) {
//         throw new Error("Not authenticated!")
//     }
//     if (!req.file) {
//         return res.status(200).json({ message: "No file provided!" })
//     }
//     if (req.body.oldPath) {
//         clearImage(req.body.oldPath)
//     }
//     return res
//     .status(201)
//     .json({ message: "File Stored.", filePath: req.file.path })
// })

// app.use(
//     "/graphql", graphqlHTTP({
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
//     })
// )

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

// 151-159
// mongoose
//     .connect(
//       `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tzocc.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`
//     )
//     .then(result => {
//     app.listen(8080)
//     console.log('app is listening on 8080')
// })
// .catch(err => console.log(err))

// 180-181

// console.log("people")
// console.log(process.env.REACT_APP_APP_URL)