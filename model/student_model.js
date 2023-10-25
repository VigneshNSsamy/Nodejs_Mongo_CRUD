const mongoose = require('mongoose')

    module.exports =  mongoose.model('Records',{
        fullname: {type: String},
        department: {type: String},
        profession: {type: String},
        phonenumber: {type: Number},
})