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
    fileImage: {
        data: Buffer,
        contentType: "String",
    }
})

module.exports = fileDataModel = mongoose.model('fileDataModel', fileDataSchema)