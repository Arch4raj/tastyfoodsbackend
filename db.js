const mongoose = require("mongoose");

var mongoDBURL= 'mongodb+srv://achu:achu123@tastyfoods.d92f9.mongodb.net/tastyfoods'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose