const express = require('express')
const router = express.Router()

const controller = require('../controller/books.controller')

router.post('/addBook',controller.postBook)

router.get('/showAllBooks',controller.getBook)

module.exports = router