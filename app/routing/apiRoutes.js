const friends = require('../data/friends');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        if (req.body) {
            res.json(checkCompatibility(req.body));
        }
    });

};

// checks the friends data for the most compatible match against the provided scores array (returns -> friend object)
function checkCompatibility(arr) {
    let bestScore = Infinity;
    let bestFriend;
    for (let friend of friends) {
        let totalDifference = 0;
        for (let i = 0; i < friend.scores.length; i++) {
            totalDifference += Math.abs(friend.scores[i] - arr[i]);
        }
        if (totalDifference < bestScore) {
            bestScore = totalDifference;
            bestFriend = friend;
        }
    }
    console.log('bestScore: ', bestScore); //TODO: delete
    console.log('bestFriend: ', bestFriend); //TODO: delete
    return bestFriend;
}