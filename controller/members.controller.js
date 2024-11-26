const Member = require('../models/members.model')

const addMember = async (req,res)=>{
    try{
        const data = req.body
        const mod = await Member.create(data)
        res.status(200).json({"message":"member added successfully",mod})
    }
    catch(error)
    {
        res.status(500).json("Error adding member")
    }
}

const showAllMembers = async(req,res)=>{
    try{
        const object = await Member.find()
        res.status(200).json(object)
    }
    catch(error){
        res.status(500).json("Error finding member")
    }
}

module.exports = {
    addMember,
    showAllMembers
}