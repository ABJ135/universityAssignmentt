const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const memberSchema = ({
    name:String,
    membershipNumber:{type:String},
    email:{type:String},
    membershipType:String,
    contactNumber:String
})

const member = mongoose.model('member',memberSchema)

module.exports = member