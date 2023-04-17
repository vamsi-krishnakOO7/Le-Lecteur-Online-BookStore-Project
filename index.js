const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const { response } = require('express');
const seller = require('./routes/seller');
const { use } = require('./routes/seller');
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/lelecteur')
.then(()=>{
    console.log("Database Connected Successfully");
})
.catch(()=>{
    console.log("Failed");
})

app.set('view engine', 'hbs');
const css_path = path.join(__dirname, '/public');
app.use(express.static(css_path));
app.get('/', (req, res) => {
    res.render('project.hbs')
})

app.get('/pre-owned.hbs', (req, res) => {
    res.render('pre-owned.hbs')
})

hbs.registerPartials(__dirname+'/views','{{nav}}')
app.use(express.json())
app.use('/',seller);
app.listen("3000", () =>{
    console.log('Success')
})