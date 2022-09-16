const mongoose = require('mongoose');

const fileDataSchema = mongoose.Schema ({
    name: {
        type: "String",
        required: "true",
    },
    author: {
        type: "String",
        required: true,
    },
    category: {
        type: "String",
        required: true,
    },
    synopsis: {
        type: "String",
        required: true,
    },
    picture: {
        type: "String",
        required: true,
    },
    documentName: {
        type: "String",
        required: true,
    },
    fileImage: {
        type: "String",
        contentType: "String",
    }
})

module.exports = fileDataModel = mongoose.model('fileDataModel', fileDataSchema)