const express = require("express");
const socket = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socket(server);
console.log('hi')
io.on("connection", socket => {
    console.log('test')
    console.log(socket.id)
    socket.emit("your id", socket.id);
    socket.on("send message", body => {
        console.log(body)
        io.emit("message", body);
    })
})

server.listen(8000, () => console.log("Listening on Port 8000"));