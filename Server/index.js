    import mongoose from "mongoose";
    
    mongoose.connect("mongodb+srv://Owc:1234@owc.asxhomx.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("connected")}).catch(e=>{console.log(e)})
    import userroutes from  './Routes/userroutes.js'
    

    import  express  from "express";
import property from "./Routes/Propertiesroute.js";
    

    const app=express()
   
    app.use(express.json())
    
    app.use('/User',userroutes)
    app.use('/property', property)

    app.listen(5000,console.log("listeninig oon 5000"))
      



