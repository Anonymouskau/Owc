import { Router } from "express";
import property from "../models/property.js";
import Property from "../models/property.js";

const route = Router();

// Add many properties

// Add property

route.post("/property", async (req, res) => {
  const Property1 = new Property({
    country: req.body.country,
    State: req.body.State,

    city: req.body.city,

    Propertyname: req.body.Propertyname,
    Status: req.body.Status,
    Propertydesc: req.body.Propertydesc,
    propertytype: req.body.propertytype,
    subtype: req.body.subtype,
    prize: req.body.prize,

    image: req.body.image,
  });
  await Property1.save().then(()=>res.status(200).json("Saved")).catch(err=>res.status(500).json(err))
});

//Get All
route.get("/property", (req, res) => {
  try {
    property
      .find()
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});
//find by Country
route.post("/propertyname", (req, res) => {
  Property.find({country:req.params.country}).then((properties)=>res.status(200).json(properties)).catch(err=>res.status(500).json(err));
});
//find by propertytype 

route.get("/officespaces", (req, res) => {
  try {
    property
      .find({propertytype:"Officespace"})
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});
 

//find by propertytype  Desk

route.get("/desk", (req, res) => {
  try {
    property
      .find({propertytype:"Dedicated Desk"})
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});
 
//find property by education

route.get("/education", (req, res) => {
  try {
    property
      .find({propertytype:"Educational"})
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});
 
 
//find property by Restaurant

route.get("/restaurant", (req, res) => {
  try {
    property
      .find({propertytype:"Restaurant"})
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});

//remove by id
route.delete("/property", (req, res) => {
  Property.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json("sucessfull"))
    .catch(() => res.status(500));
});

export default route;
