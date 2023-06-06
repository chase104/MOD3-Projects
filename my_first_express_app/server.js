const express = require('express');

// do express stuff

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my EXPRESS server")
});

app.get('/about', (req, res) => {
    res.send("<div> <h1>About Page</h1> <p>Go to /info to see the data</p> </div>")
})

app.get("/user_data", (req, res) => {
    res.json({name: "Chase", state: "TX"});
})


app.listen(3000, () => {
    console.log("listening on port ", 3000);
});

