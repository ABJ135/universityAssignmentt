const Transaction = require('../models/transactions.model')

const addTransaction = async(req,res)=>{
    try{
        const data = req.body
        const object = await Transaction.create(data)
        res.status(200).json({"message":"Transaction added successfully",object})
    }
    catch(error)
    {
        res.status(500).json("Error adding transaction")
    }
}

const showAllTransaction = async (req,res)=>{
    try{
        const object = await Transaction.find()
        res.status(200),json(object)
    }
    catch(error)
    {
        res.status(500).json("Error finding transaction")
    }
}

module.exports = {
    addTransaction,
    showAllTransaction
}