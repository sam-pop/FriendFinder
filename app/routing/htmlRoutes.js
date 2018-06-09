// Dependencies 
const path = require('path');


module.exports = function (app) {

    // survey page route
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // default route
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

};