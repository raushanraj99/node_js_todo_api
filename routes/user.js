const User = require('../models/user.js');
 
const express = require('express')

const router = express.Router()

router.get("/all", async (req, res) => {

   const users = await User.find({});
 
   const keyword = req.query.keyword;
   console.log(keyword)
 
   res.json({
     success: true,
     users,
   });
 });


 router.post("/new", async (req, res) => {
   const { name, email, password } = req.body;
 
   await User.create({
     name:name,
     email:email,
     password:password,
   });
   res.statusCode(201).json({
     success: true,
     message: "Registered Successfully ",
   });
 });

router.get('/userid/special',(req,res)=>{
  res.json({
    success:true,
    message:"Just joking"
  })
})

 router.get('/userid/:id',async (req,res)=>{

   const {id} = req.params;
   const users = await User.findById(id)

   console.log(id)

   res.json({
      success:true,
      users,
   })

})

module.exports = router;