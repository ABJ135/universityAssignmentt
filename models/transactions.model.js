const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const transactionSchema = new Schema({
    transactionId:String,
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'book'
    },
    memberId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    issueDate:String,
    returnDate:String,
    status:String
})

const transaction = mongoose.model('transaction',transactionSchema)

module.exports = transaction