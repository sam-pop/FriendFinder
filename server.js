// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Express app
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('hello world!');
});


// Server listen
app.listen(3000, function () {
    console.log("Server running on Port 3000...");
});