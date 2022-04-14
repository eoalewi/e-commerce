// Installing Express.js

const http = require("http");

const express = require("express");

const t42 = express();

t42.use((req, res, next) => {
    console.log("In the middleware!");
    next();
});

t42.use((req, res, next) => {
    console.log("In another middleware!");
    // ...
});

const server = http.createServer(t42); 

server.listen(3000);