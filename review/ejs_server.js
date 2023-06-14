const express = require('express');
const server = express();


server.set('view engine', "ejs");
server.set('views', __dirname + '/views');


server.get('/', (req, res) => {
    res.send("welcome to my server. You can go to /home for the home page, /about for the about page, and /contact for the contact page")
})

server.get('/home', (req, res) => {
    res.render('page', {pageTitle: "Home"});
});
server.get('/about', (req, res) => {
    res.render('page', {pageTitle: "About"});

});
server.get('/contact', (req, res) => {
    res.render('page', {pageTitle: "Contact"});

});

server.listen(4001, () => {
    console.log('listening on 4001')
})