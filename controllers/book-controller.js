const mongoose = require('mongoose')
const url = 'mongodb://localhost/test'
const Book = require('../models/book')
mongoose.connect(url, {useNewUrlParser: true})

class BookController {

    static findAll(req,res) {
        let findByQuery = {}

        if (req.query.q) {
            findByQuery = {
                $or: [{
                    title: {
                        $regex: '.*' + req.query.q + '.*',
                        $options: "i"
                    }
                }, {
                    author: {
                        $regex: '.*' + req.query.q + '.*',
                        $options: "i"
                    }
                }]
            }
        } else if (req.query.title) {
            findByQuery = {
                title: {
                    $regex: '.*' + req.query.title + '.*',
                    $options: "i"
                }
            }
        } else if (req.query.author) {
            findByQuery = {
                author: {
                    $regex: '.*' + req.query.author + '.*',
                    $options: "i"
                }
            }
        }

        Book.find(findByQuery)
            .then((books)=> {
                res.status(200).send(books)
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

    static create(req,res) {
        Book.create({
            isbn : req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
            .then((book)=> {
                res.status(201).send({book, msg: `successfully insert a new book`})
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

    static update(req, res) {
        Book.findByIdAndUpdate(req.params.id, 
            {
                isbn : req.body.isbn,
                title : req.body.title,
                author: req.body.author,
                category : req.body.category,
                stock : req.body.stock
            })
            .then(()=> {
                res.status(200).send(`update success!`)
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

    static delete(req, res) {
        Book.findByIdAndDelete(req.params.id)
            .then(()=> {
                res.status(200).send(`delete success!`)
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

    static updateOne(req,res) {
        Book.findByIdAndUpdate(req.params.id,
            {
                title : req.body.title
            })
            .then(()=> {
                res.status(200).send(`update suuccess`)
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

}

module.exports = BookController