// Dependencies 
const path = require('path');


module.exports = function (app) {

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // default route
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

};