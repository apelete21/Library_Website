const mongoose = require('mongoose');

const categorySchema = mongoose.Schema ({
    name: {
        type: "String",
        required: "true",
    }
})

module.exports = categoryModel = mongoose.model('categoryModel', categorySchema)

/* We have made a schema type for the categories but we cannot use it because we will not post anything as categories*/