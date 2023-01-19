import { Router } from "express";
import User from "../models/User.js";

const route=Router()


route.post('/Admin', (req,res)=>{

 
    try {
        
            
          const Username=req.body.User
        const uid=req.body.id
        var User1=new User({
          name:Username,
          id:uid

        })
        User1.save((err,result)=>{
          if(err){
            console.log(err);


          }
          console.log(result)
        })
        console.log(req.body,User)
        } catch (error) {
        console.log(error)
        
      }

      }  )


route.get('/Admin',(req,res)=>{



})


route.get('/Admin/:',(req,res)=>{


    
})

route.get('/remove',(req,res)=>{


    
})


export default (route)