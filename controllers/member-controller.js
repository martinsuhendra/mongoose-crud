const mongoose = require('mongoose')
const url = 'mongodb://localhost/test'
const Member = require('../models/member')
mongoose.connect(url, {useNewUrlParser: true})

class MemberController {

    static findAll(req,res) {
        Member.find()
            .then((members)=> {
                res.status(200).send(members)
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

    static create(req,res) {
        Member.create({
            name : req.body.name,
            address: req.body.address,
            zipcode: req.body.zipcode,
            email: req.body.email,
            phone: req.body.phone
        })
            .then((member)=> {
                res.status(201).send({member, msg: `successfully insert a new member`})
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

    static update(req, res) {
        Member.findByIdAndUpdate(req.params.id, 
            {
                name : req.body.name,
                address: req.body.address,
                zipcode: req.body.zipcode,
                email: req.body.email,
                phone: req.body.phone
            })
            .then(()=> {
                res.status(200).send(`update success!`)
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

    static delete(req, res) {
        Member.findByIdAndDelete(req.params.id)
            .then(()=> {
                res.status(200).send(`delete success!`)
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

    static updateOne(req,res) {
        Member.findByIdAndUpdate(req.params.id,
            {
                address : req.body.address,
                zipcode : req.body.zipcode
            })
            .then(()=> {
                res.status(200).send(`update success`)
            })
            .catch((err)=> {
                res.status(500).send(err.message)
            })
    }

}

module.exports = MemberController