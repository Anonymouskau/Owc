// Property1 = new Property({
//   country: req.body.country,
//   State: req.body.State,

//   city: req.body.city,

//   Propertyname: req.body.Propertyname,
//   Status: req.body.Status,
//   Propertydesc: req.body.Propertydesc,
//   propertytype: req.body.propertytype,
//   subtype: req.body.subtype,
//   prize: req.body.prize,

//   image: req.body.image,

import React, { useState } from 'react'
import '../Propertyadd/padd.css'
export  default function Properties  ()  {
  

  const [state,setstate]=useState({
     
    country:"",
    State:"",
    city:"",
    Propertyname:"",
    Status:"",
    Propertydesc:"",
    propertytype:"",
    subtype:"",
    prize:"",
    image:""
  })
  const handler=(e)=>{
     const{name,...value}= e.target.value
     console.log(name);
     console.log(value);
    setstate({
      ...state,[name]:value
    })
    
  
  }
  
  return (
    <>
    &nbsp;
    <div class='container1'>
    <div class="container1">  
  <form id="contact" action="" method="post">
    <h3> Add Properties</h3>
    <h4>Enter each details Properly !!! </h4>
    <fieldset>
      <input onChange={handler} defaultValue={state.country} name="country" placeholder="Country" type="text" tabindex="1" required autoFocus />
    </fieldset>
    <fieldset>
      <input onChange={handler} defaultValue={state.State} name='State' placeholder="State" type="text" tabindex="2" required />
    </fieldset>
    <fieldset>
      <input  onChange={handler} defaultValue={state.city}name='city' placeholder="City" type="text" tabindex="3" required />
    </fieldset>
    <fieldset>
      <input  onChange={handler} defaultValue={state.Propertyname} name='Propertyname' placeholder="Propertyname" type="text" tabindex="4" required />
    </fieldset>
    <fieldset>
      
    <fieldset>
      <input onChange={handler} defaultValue={state.prize} name='prize'placeholder="Prize" type="text" tabindex="4" required />
    </fieldset>

    <fieldset>
      <input  onChange={handler} defaultValue={state.Status}name='Status' placeholder="Status" type="text" tabindex="4" required />
    </fieldset>
    <fieldset>
      <input onChange={handler} defaultValue={state.image} name='image' placeholder="Image link use Links from pexels" type="url" tabindex="4" required />
    </fieldset>
      <textarea  defaultValue={state.Propertydesc} name="Propertydesc"placeholder="Property desc" tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button onClick={()=>{




      }} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    <p class="copyright"> <a href="https://colorlib.com" target="_blank" title="Colorlib"></a></p>
  </form>
</div>
    
     &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
      
    </div>
    </>
  )
}
