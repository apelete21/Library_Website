const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    fullName: {
        type: 'String',
        required: true,
        unique: true,
    },
    userName: {
        type: 'String',
        required: true,
        unique: true,
        min: 5,
    },
    password: {
        type: 'String',
        required: true,
        unique: true,
        min: 6
    }
})

module.exports = mongoose.model('Posts', PostSchema)