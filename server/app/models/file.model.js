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
fileDataSchema.post('find', function (next) {
    this.fileImage.data = Buffer.toString(this.fileImage.data);
});
module.exports = fileDataModel = mongoose.model('fileDataModel', fileDataSchema)