// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Express app
const app = express();
const PORT = process.env.PORT || 3000;

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Router
require('./app/routing/htmlRoutes')(app);
// require('./app/routing/apiRoutes')(app); //TODO: uncomment after building the file

// Listener
app.listen(3000, function () {
    console.log("Listening on port " + PORT);
});