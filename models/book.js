const mongoose = require('mongoose')
const url = 'mongodb://localhost/test'
mongoose.connect(url, {useNewUrlParser: true})

const bookSchema = new mongoose.Schema({
    isbn : String,
    title : String,
    author: String,
    category: String,
    stock : Number
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
