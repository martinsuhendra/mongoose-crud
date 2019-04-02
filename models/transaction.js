const mongoose = require('mongoose')
const url = 'mongodb://localhost/test'
const Schema = mongoose.Schema;

mongoose.connect(url, {
    useNewUrlParser: true
})

const transactionSchema = new mongoose.Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Member'
    },
    in_date: Date,
    out_date: Date,
    due_date: Date,
    fine: Number,
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
})

transactionSchema.post('findOneAndUpdate', function (doc) {
    if (doc.due_date < doc.in_date) {
        dt1 = doc.due_date;
        dt2 = doc.in_date;
        let diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24))
        doc.fine = +diff * 1000
    } else {
        doc.fine = 0
    }

    doc.save()
    next()
})

const Transaction = mongoose.model('Transaction', transactionSchema)


module.exports = Transaction