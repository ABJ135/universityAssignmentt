const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/library'

mongoose.connect(mongoUrl).then(()=>console.log('DB connected'))
