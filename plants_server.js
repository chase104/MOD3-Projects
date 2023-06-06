const express = require('express');
const app = express();
const port = 3000;

const plants = ['Cactus', 'Flower', 'Tree', "Bush"];

// GET "/Flower"


app.get('/', (req, res) => {
    res.send(plants);
});
app.get('/about/project', (req,res) => {
    res.send("this is the project's about page! ")
});
app.get('/get_data/:plantName', (req,res) => {
    if (plants.includes(req.params.plantName)) {
        res.send("PLANT FOUND")
    } else {
        res.send("NO PLANT")
    }
});

app.get('/:indexIWantToUse/:message', (req, res) => {
    // req.params is an object with ALL the params.
    let myPlant = plants[req.params.indexIWantToUse];
    let message = req.params.message;
    res.send(myPlant + " " + message);
});

// same thing, but using query NOT params
// req.query will have ALL query values
app.get("/get_single_plant", (req, res) => {
    console.log(req.query)
    let myPlant = plants[req.query.plantId]
    res.send(myPlant)
})
// catch all
app.get('/*', (req, res) => {
    res.status(404)
    res.send("You made a bad request, no backflips from this server");
});







app.listen(port,() => {
    console.log('listening on port' , port);
});