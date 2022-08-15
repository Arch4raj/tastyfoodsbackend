const express = require("express");
const router = express.Router();
const Food = require('../models/foodModel')


router.get("/getallfoods",(req,res) => {

Food.find({},(err ,docs )=>{
       
    if(!err)
    {
        return res.send(docs);
    }
    else {
        return res.status(400).json({message : 'Something went wrong'})
    }

})
});


router.post("/getfoodbyid", (req,res) => {
   
    Food.find({_id : req.body.foodid} , (err , docs)=>{

        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({message : "something went worng"});
        }
    })
})


router.post("/deletefood", (req, res) => {

    Food.findByIdAndDelete(req.body.foodid , (err)=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' + err});
        }else{
            res.send('Food deleted successfully')
            
        }
    })
  
});


router.post("/addfood", (req, res) => {

    const {food} = req.body

    console.log(food);

    const foodModel = new Food({
        foodName : food.foodName , 
        price : food.price,
        description : food.description,
        countInStock : food.countInStock ,
        image : food.image ,
        category : food.category

    })

    foodModel.save(err=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' });
        }else{
            res.send('FoodItem Added Successfully')
        }
    })
  
});

router.post("/updatefood", (req, res) => {

    Food.findByIdAndUpdate(req.body.foodid , {
        foodName : req.body.updatedfood.foodName,
        price : req.body.updatedfood.price,
        category : req.body.updatedfood.category,
        description : req.body.updatedfood.description,
        countInStock : req.body.updatedfood.countInStock,
        image : req.body.updatedfood.image

    } , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Product Updated Successfully')
        }

    })
  
});

module.exports=router