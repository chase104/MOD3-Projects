const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
// "/" give index.ejs

app.get('/', async (req, res) => {
    const randomIndex = Math.floor(Math.random()*10)
    let personResponse = await axios(`https://swapi.dev/api/people/${randomIndex}`);
    console.log(personResponse)
    const ejsVarObject = {
        pageName: "Home",
        pTagContent: "Here is a random person from an api!",
        personName: personResponse.data.name
    }
    res.render('index', ejsVarObject);

});

app.get('/fun_index', (req, res) => {
    const ejsVarObject = {
        pageName: "Fun Home Page",
        pTagContent: "FUN ZONE TIME!"
    }
    res.render('index', ejsVarObject);
})

app.get('/about', (req, res) => {
    const ejsVarObject = {
        content: "Welcome to the about page"
    }
    res.render('about', ejsVarObject);
})


//  "/about" give about.ejs

app.listen(port,() => {
    console.log('listening on port' , port);
});