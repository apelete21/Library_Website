const multer = require('multer')
const fileDataModel = require('../models/file.model')
const dbo = require('../../config/database')
const fs = require("fs")
// storage
const Storage = multer.diskStorage({
    destination: 'public/pictures',
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.originalname)
    }
})
// Upload function
const upload = multer({
    storage: Storage,
}).single('file')

module.exports = {
    uploadFileData: (req, res) => {
        upload(req, res, (next, err) => {
            if (err) { next(err); console.log(error) }
            else {
                const newFileData = new fileDataModel({
                    name: req.body.name,
                    author: req.body.author,
                    category: req.body.category,
                    synopsis: req.body.synopsis,
                    picture: req.body.picture,
                    documentName: req.body.docName,
                    fileImage: {
                        data: req.file.originalname,
                        contentType: req.file.mimetype
                    }
                })
                newFileData
                    .save()
                    .then(() => res.json('Upload Success !'))
                    .catch(err => res.json(err))
            }
        })
    },
    downloadFileData: (req, res) => {
        let  mydataimage;
        dbo.connection.collection("filedatamodels")
            .find({})
            .toArray(function (err, result) {
                if (err) throw err;
                res.json(result);
                mydataimage = result
                console.log(mydataimage)
            });
    }
}