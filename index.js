const express = require('express')
const app = express()
const port = 3000

const bookRouter = require('./router/books.router')
const memberRouter = require('./router/members.router')
const transactionRouter = require('./router/transaction.router')
const db = require('./db')

app.use(express.json())

app.use('/books',bookRouter)
app.use('/members',memberRouter)
app.use('/transactions',transactionRouter)

app.listen(port,()=>{
    console.log(`server is listning on the port ${port}`)
})