const express = require('express')
const router = express.Router()


// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// Import PostsController
const PostsController = require("../controllers/auth/post");
// Post route
router.post('/signup', PostsController.createUser);

router.get('/', (req, res) => {
    res.send("Hello World")
})

module.exports = router