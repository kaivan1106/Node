//code for creating server

/* const http = require('http');

const server = http.createServer((req,res) => {
    res.write('hello this is node js server');
    res.end();
});

server.listen(3000,() => {
    console.log("server is running on port 3000");
}); */

//using express package

const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.write('Hello  from Node JS');
    res.end();
})

app.listen(5000,() => {
    console.log("Express server running on http://localhost:5000");
})