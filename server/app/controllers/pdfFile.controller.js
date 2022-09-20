const multer = require('multer')
const dbo = require('../../config/database')
const path = require('path');
const ObjectId = require('mongodb').ObjectId
// storage
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/server/public/documents')
    },
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
    pdfUpload: (req, res, next) => {
        upload((res, next) => {
            if (err) next(err)
            res.json({
                status: "Success",
                message: "Uploaded Successfully"
            })
        })
    },
    pdfDownload: (req, res) => {
        try {
            res.set({
                'Content-Type': 'file/pdf'
            });
            res.sendFile(path.join(__dirname, '../../public/documents', req.params.name));
        } catch (error) {
            res.status(400).send('Error while downloading file. Try again later.');
        }
    }
}