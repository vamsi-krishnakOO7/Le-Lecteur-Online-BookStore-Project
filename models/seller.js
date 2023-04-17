const mongoose = require('mongoose')

const Seller = mongoose.model('Seller',new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    authorname:{
        type:String,
        required:true
    },
    publicationname:{
        type:String,
        required:true
    },
    askingprice:{
        type:Number,
        required:true
    }
}))

exports.Seller = Seller;