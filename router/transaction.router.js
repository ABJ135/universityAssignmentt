const express = require('express')
const router = express.Router()

const controller = require('../controller/transaction.controller')

router.post('/addTransaction',controller.addTransaction)
router.get('/showAllTransactions',controller.showAllTransaction)
router.post('/addAll',controller.addAll)
router.get('/showAll',controller.showAll)

module.exports = router