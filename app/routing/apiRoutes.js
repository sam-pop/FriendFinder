const friends = require('../data/friends');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('api/friends', function (req, res) {
        if (req.body) {
            //TODO: check for compatibility (using `req.body` against the `friends` array)
            //TODO: return the most compatible friend (using `res`)
        }
    });

};