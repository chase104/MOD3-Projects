const express = require('express');

const app = express();

app.use(express.static('public'));

const plants = ['Cactus', 'Flower', 'Tree', "Bush"];


app.get("/plants", (req, res) => {
    res.send(plants)
});

app.get("/plants/:indexOfPlant", (req, res) => {
    res.send({string: plants[req.params.indexOfPlant]})
})

app.get('/random', (req, res) => {
    let randomNum = Math.floor(Math.random()*2000)
    res.send({data: randomNum});
});


app.listen(3000, () => {
    console.log("sever listening on port ", 3000)
});


