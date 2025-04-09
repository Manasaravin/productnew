var express = require('express');
var router = express.Router();
var productModel = require('../model/product');

router.get('/get',async(req,res)=>{
    try {
        var data = await productModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})


router.get('/get',async(req,res)=>{
    try {
      var data = await productModel.findById(req.params.id);
      res.send(data)  
    } catch (error) {
        res.send(error)
    }
})






router.post('/post',(req,res)=>{
    try {
        console.log(req.body)
        productModel(req.body).save();
        res.send("DATA ADDED")

    } catch (error) {
        res.send(error)
    }

})




router.delete('/delete/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await productModel.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
    
    } catch (error) {
      res.send(error)  
    }
})





router.put('/update/:id',async(req,res)=>{
    try {
        await productModel.findByIdAndUpdate(req.params.id,req.body);
        
        res.send("Edited")
    } catch (error) {
        res.send(error)
    }
})
module.exports=router 




