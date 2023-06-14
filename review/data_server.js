const express = require('express');
const server = express();

let myCars = ["ford", "honda", "hyundai"];

server.get('/', (req, res) => {
    console.log(req.headers);
    res.send("Welcome to my API Server.")
})
server.get('/cars', (req, res) => {
    res.send(myCars)
})
server.post('/cars/:carData', (req, res) => {
    console.log('adding new car', req.params.carData)
    myCars.push(req.params.carData)
    // PUSH CAR TO ARRAY    
    res.send("new car added")
});
server.delete('/cars', (req, res) => {
    myCars.pop()
    res.send("removed a car")
});
server.put('/cars/:index/:newName', (req, res) => {
    myCars[req.params.index] = req.params.newName;

    res.send('change made')
})

server.listen(4001, () => {
    console.log('listening on 4001')
})