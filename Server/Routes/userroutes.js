    import { json, Router } from "express";

import User from "../models/User.js";

const route=Router()


route.post('/user', async (req,res)=>{

 
    try {
        
            
                 
        var User1=new User({
            name:req.body.name,
             email:req.body.email,
         password:req.body.password,
        phoneno:req.body.phoneno,
           role:req.body.role    
        })
       await User1.save().then(()=>res.send("Sucsess")).catch(err=>console.log(err))
        } catch (error) {
        console.log(error)
        
      }

      }  )


route.get('/user',(req,res)=>{

  User.find().then((user)=>res.send(res.json(user))).catch(err=>console.log(err))







})


route.put('/forgotpass',(req,res)=>{
   
   const emailbody=req.body.email
    const passbody=req.body.password
    
    
    User.find({email:emailbody}).then((emailid=>User.updateOne({
        email:res.json(emailid)

    },{$set:{password:passbody}}).then(()=>res.send(sucess)).catch(err=>console.log(err))
    
   
    )
     ).catch(err=>console.log(err))


     

    
})

route.get('/remove',(req,res)=>{


    
})


export default (route)