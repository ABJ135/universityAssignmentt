const Book = require('../models/books.model')

const postBook = async(req,res)=>{
    try{
        const data = req.body
        const object = await Book.create(data)
        res.json({"mesage":"Object created succcessfully",object})
    }
    catch(error)
    {
        res.status(500).json("error catched")
    }
    }
    
    const getBook = async (req,res)=>{
        const object  = await Book.find({})
        res.status(200).json(object)
    }
    
   
    
    module.exports = {
        postBook,
        getBook
    }