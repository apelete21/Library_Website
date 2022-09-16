const express = require('express');
const router = express.Router();
const fileContoller = require('../app/controllers/file.controller');
router.post('/upload', fileContoller.uploadFileData);
// router.get('/get/:id', userController.authenticate);
router.get('/getAll', fileContoller.downloadFileData);
module.exports = router;