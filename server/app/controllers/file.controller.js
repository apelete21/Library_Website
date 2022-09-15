const multer = require('multer')
const fileDataModel = require('../models/file.model')
const path = require('path')
// storage
const Storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, '/public/pictures')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now(), + path.extname(`${file.originalname}`))
    }
})
// Upload function
const upload = multer({
    storage: Storage,
}).single('file')

module.exports = {
    uploadFileData: (req, res) => {
        upload(req, res, (next, err) => {
            if (err) {next(err); console.log(error)}
            else {
                const newFileData = new fileDataModel({
                    name: req.body.name,
                    author: req.body.author,
                    category: req.body.category,
                    synopsis: req.body.synopsis,
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
    }
}