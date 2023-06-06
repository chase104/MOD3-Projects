const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;


const server = http.createServer((req, res) => {

    const path = req.url;

    if (path=== "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Welcome to my Server")
    } else if (path==="/person") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        let person = [{name: "Chase", profession: "teacher", awesomeness: 200}]
        let stringPerson = JSON.stringify(person);
        res.end(stringPerson)
    } else if (path==="/about") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        let html = "<div><h1>About Page</h1><p>Welcome to my sever, please use the '/person' route to get some data</p></div>"
        res.end(html)
    } else  {
        res.statusCode = 404;
        res.end("Bad Request")
    }
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});


