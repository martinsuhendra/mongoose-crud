const mongoose = require('mongoose')
const url = 'mongodb://localhost/test'
const Transaction = require('../models/transaction')
mongoose.connect(url, {useNewUrlParser: true})

class TransactionController {
    static findAll(req,res) {
      
        Transaction.find({})
            .populate('booklist')
            .populate('member')
            .then((transactions)=> {
                if (!req.query.bookId) {
                    res.status(200).json(transactions)
                } else {
                    let found = []
                    transactions.forEach(e => {
                        e.booklist.forEach(b => {
                            if (req.query.bookId == b._id) {
                                found.push(e)
                            }
                        })
                    })
                    res.status(200).json(found)
                }
            })
            .catch((err)=> {
                res.status(500).json(err.message)
            })
    }

    static create(req,res) {
        
        Transaction.create({
            member : req.body.member,
            in_date: req.body.in_date,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            fine: req.body.fine,
            booklist : req.body.booklist
        })
            .then((transaction)=> {
                res.status(201).send({transaction, msg: `successfully insert a new transaction`})
            })
            .catch((err)=> {
                res.status(500).json(err.message)
            })
    }

    static update(req, res) {
        Transaction.findByIdAndUpdate(req.params.id, 
            {
                member : req.body.member,
                in_date: req.body.in_date,
                out_date: req.body.out_date,
                due_date: req.body.due_date,
                fine: req.body.fine,
                booklist : req.body.booklist
            })
            .then(()=> {
                res.status(200).send(`update success!`)
            })
            .catch((err)=> {
                res.status(500).json(err.message)
            })
    }

    static delete(req, res) {
        Transaction.findByIdAndDelete(req.params.id)
            .then(()=> {
                res.status(200).send(`delete success!`)
            })
            .catch((err)=> {
                res.status(500).json(err.message)
            })
    }

    static updateOne(req,res) {
        Transaction.findByIdAndUpdate(req.params.id,
            {
                in_date : req.body.in_date
            })
            .then(()=> {
                res.status(200).send(`update success`)
            })
            .catch((err)=> {
                res.status(500).json(err.message)
            })
    }

    static findOne(req,res) {
        Transaction.findById(req.params.id)
            .populate('booklist')
            .populate('member')
            .then((transaction)=> {
                res.status(200).json(transaction)
            })
            .catch((err)=> {
                res.status(500).json(err.message)
            })
    }

}

module.exports = TransactionController