const express = require('express')
const router = express.Router()

const controller = require('../controller/transaction.controller')

router.post('/addTransaction',controller.addTransaction)
router.get('/showAllTransactions',controller.showAllTransaction)

module.exports = router