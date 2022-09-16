const express = require('express');
const router = express.Router();
const categoryRoute = require('../app/controllers/categories.controller')

router.get('/lists', categoryRoute.getCategories)

module.exports = router