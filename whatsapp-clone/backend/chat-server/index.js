const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

require('dotenv').config()
const port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.status(200).send({"message":"Welcome to TalkTrek"})
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});