// const {seller} = require('../models/seller');
const {Seller} = require('../models/seller')
const express = require('express');
const router = express.Router();

router.post('/',async (req,res)=>{
    let seller = new Seller({
        bookname:req.body.bookname,
        authorname:req.body.authorname,
        publicationname:req.body.publicationname,
        askingprice:req.body.askingprice
    })
    seller = await seller.save();
    res.redirect('/');
})

module.exports = router;