const express = require('express');
const path = require('path')
const server = express();


server.use(express.static('public'));

server.get('/data', (req, res) => {
    res.send('123')
})


server.listen(4001, () => {
    console.log('listening on 4001')
})