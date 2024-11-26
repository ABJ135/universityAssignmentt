const express = require('express')
const app = express()
const port = 3000

const bookRouter = require('./router/books.router')
const db = require('./db')

app.use(express.json())

app.use('/books',bookRouter)

app.listen(port,()=>{
    console.log(`server is listning on the port ${port}`)
})