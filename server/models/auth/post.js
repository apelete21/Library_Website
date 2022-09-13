const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    fullName: {
        type: 'String',
        required: true,
    },
    userName: {
        type: 'String',
        required: true,
        unique: true,
        min: 6,
    },
    password: {
        type: 'String',
        required: true,
        min: 6
    }
})

module.exports = mongoose.model('Posts', PostSchema)