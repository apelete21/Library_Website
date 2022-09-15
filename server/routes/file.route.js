const express = require('express');
const router = express.Router();
const fileContoller = require('../app/controllers/file.controller');
router.post('/upload', fileContoller.uploadFileData);
// router.get('/get/:id', userController.authenticate);
// router.get('/getAll', userController.authenticate);
module.exports = router;