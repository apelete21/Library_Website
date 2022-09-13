const posts = require('../../models/auth/post');

// This will help us connect to the database
const dbo = require("../../db/dbConn");

// This help convert the id from string to ObjectId for the _id.
//** */ const ObjectId = require("mongodb").ObjectId;

exports.createUser = (req, response) => {

    let db_connect = dbo.getDb();

    const post = new posts({
        fullName: req.body.fullName,
        userName: req.body.userName,
        password: req.body.password
    })


    db_connect.collection("users").insertOne(post, function (err, res) {
        if (res.acknowledged) {
            response.json(post);
        } else {
            response.json(err)
        }
    });
}