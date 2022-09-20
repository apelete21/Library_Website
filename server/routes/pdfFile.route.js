const pdfControler = require('../app/controllers/pdfFile.controller')
const express = require('express');
const router = express.Router();
router.post('/upload', pdfControler.pdfUpload)
router.get('/download/:name', pdfControler.pdfDownload)
module.exports = router