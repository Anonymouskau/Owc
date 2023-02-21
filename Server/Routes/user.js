    import { json, Router } from "express";
  
import User from "../models/User.js";
import dotenv from 'dotenv'
dotenv.config()
const route=Router()

// Create
route.post('/user', async (req,res)=>{

 
    try {
        
            // encripting password =>crypto.AES.encrypt(req.body.password,process.env.PASS_SET)
                 
        var User1=new User({
            name:req.body.name,
             email:req.body.email,
             password:req.body.password,
        phoneno:req.body.phoneno,
           role:req.body.role    
        })
       await User1.save().then((u)=>res.status(200).send("User Created")).catch(err=>console.log(err))
        } catch (error) {
        console.log(error)
        
      }
    })  
//FindbyId
route.post('/Login',(req,res)=>{
   console.log(req.body.email)
     const{email,password}=req.body
  User.findOne({email:email},(err, user)=>
  
  
  {if(user){
     if(password===user.password){
      res.send(200, user)
     }else{
        res.send(420,{message:"Not valid pass"})
     }
   
  
  }
else{
  res.send({message:"Not Registered User"})
}})






})

//Findallusers
route.get('/user',(req,res)=>{

    User.find().then((user)=>res.status(200).json(user)).catch(err=>console.log(err))
  
  
  
  
  
  
  
  })
  
//Update  
route.put('/forgotpass',(req,res)=>{
   
   const emailbody=req.params.email
    const passbody=req.params.password
    
    
    User.updateOne({ email:emailbody},{$set:{password:passbody}},{new:true}).then(()=>res.send("sucess")).catch(err=>console.log(err))


     

    
})


/// remove Method
route.delete('/user/:id',(req,res)=>{

User.deleteOne({_id:req.params.id}).then((user)=>res.status(200).json(user)).catch((err)=>res.status(500).json(err))
    
})


 export default(route)