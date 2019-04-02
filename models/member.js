const mongoose = require('mongoose')
const url = 'mongodb://localhost/test'
mongoose.connect(url, {useNewUrlParser: true})

const memberSchema = new mongoose.Schema({
    name: String,
    address: String,
    zipcode: String,
    email: {
        type : String,
        validate : [{
            validator : function emailFormat(e) {
                let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                return regex.test(e)
            },
            message: `email is not a valid email format`
        },{
            validator : function checkUnique(e) {
                Member.findOne({email : e})
                    .then((found) => {
                        if (found && found._id !== this._id ) {
                            return false
                        } else {
                            return true
                        }
                    })
            },
            message: `email already exist`
        }]
    },
    phone: {
        type: String,
        minlength : 11,
        maxlength : 13
    }
})

const Member = new mongoose.model('Member', memberSchema)

module.exports = Member