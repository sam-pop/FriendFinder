const friends = require('../data/friends');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        if (req.body) { //TODO: check that this is the right condition
            //TODO: check for compatibility (using `req.body` against the `friends` array)
            //TODO: return the most compatible friend (using `res`)
            res.json(checkCompatibility(req.body));
        }
    });

};


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
    console.log('​checkCompatibility -> bestScore', bestScore);

    console.log('​checkCompatibility -> bestFriend', bestFriend);
    return bestFriend;
}