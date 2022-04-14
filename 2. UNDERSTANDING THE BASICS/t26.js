// Creating a Node Server

const http = require("http");

function rqListener(req, res) {

}
http.createServer(rqListener);



// Another way of creating

const http = require("http");

const server = http.createServer(function(req, res) {
    console.log(req);
});
server.listen();



// Another Method

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);