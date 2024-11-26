const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const bookSchema = new Schema ({
    title:String,
    author:String,
    genre:String,
    yearPublished:Number,
    availableCopies:Number
})

const book = mongoose.model('book',bookSchema)

module.exports = book