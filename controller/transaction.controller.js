const Transaction = require("../models/transactions.model");
const Book = require('../models/books.model')
const Member = require('../models/members.model')


const addTransaction = async (req, res) => {
  try {
    const data = req.body;
    const object = await Transaction.create(data);
    res.status(200).json({ message: "Transaction added successfully", object });
  } catch (error) {
    res.status(500).json("Error adding transaction");
  }
};

const showAllTransaction = async (req, res) => {
  try {
    const object = await Transaction.find().populate('bookId').populate('memberId')
    res.status(200).json(object);
  } catch (error) {
    res.status(500).json("Error finding transaction");
  }
};

const addAll = async (req,res)=>{
  try{
  const {book,member,transaction} = req.body
    const createBook = await Book.create(book)
    const createMember = await Member.create(member)
    transaction.bookId = createBook._id
    transaction.memberId = createMember._id
    await Transaction.create(transaction)
    res.status(200).json("Added")
  }
  catch(error){
    res.status(500).json(error)
  }
}

const showAll = async(req,res)=>{
  try {
    const object = await Transaction.find().populate('bookId').populate('memberId')
    res.status(200).json(object);
  } catch (error) {
    res.status(500).json("Error finding transaction");
  }
}

module.exports = {
  addTransaction,
  showAllTransaction,
  addAll,
  showAll
};
