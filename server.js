const express = require("express");
const bodyParser =require("body-parser");

const app=express()

var dbconnection = require('./db')
var foodsRoute =require('./routes/foodsRoute')
var userRoute =require('./routes/userRoute')
var orderRoute =require('./routes/orderRoute')

const cors = require("cors");

require('dotenv').config();
app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

app.use(bodyParser.json());
app.get("/", (req, res) =>
  res.send(`Server Running`)
);

app.use('/api/foods/',foodsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)




const port = process.env.PORT || 4000;

app.listen(port, () =>console.log("node JS server Started") );