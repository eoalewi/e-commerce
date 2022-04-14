// Using the Node Modules System

const http = require("http");

const t38a = require("./t38a");

console.log(t38a.someText);

const server = http.createServer(t38a.handler); 

server.listen(3000);
