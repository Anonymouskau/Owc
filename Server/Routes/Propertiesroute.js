import { Router } from "express";
import Property from "../models/property.js";

const route=Router()


route.post('/property',async (req,res)=>{

  
    try {  
             
       console.log (req.body)
        const Locationbody=req.body.Location
        const Propertybody=req.body.Property
        // console.log(Location)
        // console.log(Property)
        const {countryb,Stateb, cityb}=req.body.Location
        const {Propertynameb,
        Statusb,
        Propertydescb,
        propertytypeb,
        subtypeb,
        imageb}=req.body.Property
        const property=new Property({

            Location:[{country:countryb,State:Stateb,city:cityb}],
            Property:[{

                Propertyname:Propertynameb,
                Status:Statusb,
                Propertydesc:Propertydescb,
                propertytype:propertytypeb,
                subtype:subtypeb,
                image:imageb

            }]
        })
        
       await property.save().then(user=>console.log(user)).catch(err=>console.log(err))

      

        
    } catch (error) {
        
    }





})
route.get('/property',(req,res)=>{



})


route.post('/forgotpass',(req,res)=>{


    
})

route.get('/remove',(req,res)=>{


    
})


export default (route)