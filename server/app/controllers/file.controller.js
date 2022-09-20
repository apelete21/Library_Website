const multer = require('multer')
const fileDataModel = require('../models/file.model')
const dbo = require('../../config/database')
const path = require('path');
const ObjectId = require('mongodb').ObjectId
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
                    documentName: req.body.docName
                })
                newFileData
                    .save()
                    .then(() => res.json('Upload Success !'))
                    .catch(err => res.json(err))
            }
        })
    },
    downloadFileData: (req, res) => {
        dbo.connection.collection("filedatamodels")
            .find({})
            .toArray(function (err, result) {
                if (err) throw err;
                res.json(result)
            });
    },
    downloadOneFileData: (req, res) => {
        dbo.connection.collection("filedatamodels")
            .findOne({ _id: ObjectId(req.params.id) }, function (err, result) {
                if (err) throw err;
                res.json(result)
            });
    },
    donwloadFileImage: (req, res) => {
        try {
            res.set({
                'Content-Type': 'image/png'
            });
            res.sendFile(path.join(__dirname, '../../public/pictures', req.params.picture));
        } catch (error) {
            res.status(400).send('Error while downloading file. Try again later.');
        }
    },
    getbyCategory: (req, res) => {
        dbo.connection.collection("filedatamodels")
            .find({ category: req.params.name })
            .toArray(function (err, result) {
                if (err) res.json({ error: err });
                res.json(result)
            });
    }
}