import { Router } from "express";
import property from "../models/property.js";
import Property from "../models/property.js";

const route=Router()


route.post('/property',async (req,res)=>{

  
    try {  
             
       console.log (req.body)
        const Locationbody=req.body.Location
        const Propertybody=req.body.Property
       // console.log(Location)
        //console.log(Property)

        const property=new Property({

            Location:Locationbody,
            
            Property:Propertybody
        })
        console.log(property);
         
       await property.save().then(()=>console.log(("done"))).catch(err=>console.log(err))
      
       res.send("Done ")
      

        
    } catch (error) {
        res.status(500)
    }





})
route.get('/property',(req,res)=>{


    try {
        
    property.find().then(user=>res.send(res.json(user))).catch(err=>console.log(err))

    } catch (error) {

       res.status(500)
        
    }



})


route.post('/forgotpass',(req,res)=>{


    
})

route.get('/remove',(req,res)=>{


    
})


export default (route)