import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Properties() {
 const [prop,setprop]=useState([])
  const  getproperties= async()=>{
    await axios.get("http://localhost:5000/Property/property").then((res)=>setprop(res.data)).catch((err)=>console.log(err))
             
  }
 useEffect(()=>{
  getproperties()
 },[])
     
    return (
    <>
    <h1>OFFICE SPACES</h1>
     {prop.map((proper)=>{
      return(
        <>
        <div className="card" style={{"width": "18rem"}}>
        <img className="card-img-top" src={proper.image} />
        <div className="card-body">
          <h5 className="card-title">{proper.Propertyname}</h5>
          <p className="card-text">{proper.Propertydesc}</p>
          Prize:<b>{proper.prize}</b>
          <Link  to ={"Cart"}href="#" className="btn btn-primary">Book Now</Link>
        </div>
        
      </div>
      &nbsp;
      </>
            

      )
     })}
   

</>
  )
}
