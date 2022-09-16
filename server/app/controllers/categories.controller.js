const dbo = require('../../config/database')

module.exports = {
    getCategories: (req, res, next) => {
        dbo.connection.collection("categories")
            .find({})
            .toArray(function (err, result) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
    }
}