

import mongoose,{Schema} from "mongoose";


const Property=new Schema({

    Location:[{
        country:{type:String ,required:true},
        State:{type:String ,required:true},
        city:{type:String ,required:true},
    
    }],
    Property:[{

    Propertyname:{type:String,required:true ,unique:true},
    Status:{type:String , required:true},
    Propertydesc:{type:String ,required:true},
    propertytype:{type:String ,required:true},
    subtype:{type:String ,required:true},
    image:{type:String,data:Buffer }



}]





})

export default mongoose.model("Properties",  Property);

