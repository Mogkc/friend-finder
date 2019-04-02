// This private file can require the data
const data = require("../data/friends");

module.exports = (app) => {
    // Sends information to the client
    app.get("/api/all", (req, res) => {
        res.json(data);
    });

    // Recieves information from the client
    app.post("/api/newFriend", (req, res) => {
        let newFriend = req.body;
        // JSON always sends as string
        for (let i = 0; i < 10; i++) {
            newFriend.values[i] = parseInt(newFriend.values[i]);
        }
        data.push(newFriend);
        res.send(calculateBestMatch(req.body));
    });

    // Calculations
    const calculateBestMatch = function (person) {
        if (data.length === 0) {
            return "You're the first person to join!";
        }
        // Use a for loop to find the best match
        let bestMatch = undefined;
        for (let i = 0; i < data.length; i++) {
            const comparison = compare(person.values, data[i].values);
            if (bestMatch === undefined || comparison < bestMatch.score)
                bestMatch = { match: data[i], score: comparison };
        }
        // Return only the name of the person that matches best
        return bestMatch.match;
    }

    // This relies on the data coming in and being stored being arrays of the same length.
    const compare = function (person, other) {
        let differences = 0;
        for (let i = 0; i < person.length; i++) {
            differences += Math.abs(person[i] - other[i]);
        }
    }
};
