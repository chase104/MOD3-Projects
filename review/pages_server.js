const express = require('express');
const path = require('path')
const server = express();


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
});
server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "/about.html"))
});

server.listen(4001, () => {
    console.log('listening on 4001')
})