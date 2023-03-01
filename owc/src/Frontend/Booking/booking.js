import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Book() {
  
  const role =  sessionStorage.getItem("role")
   const [books, setbooks]=useState([])
   const bookingdata=async()=>{axios.get("http://localhost:5000/Payment/payment").then((res)=>{

      setbooks(res.data)

     }).catch(err=>{console.log(err)})

    }
   useEffect(()=>{
       bookingdata()
   },[])          
  return (
    <>

    &nbsp; 

    <h1 style={{textalign:"centre"}}> Booked Properties</h1>
  
  <hr></hr>
    
    
    {books.map((props)=>{
       
      return (
      
      <>
      <div class="card w-75" style={{"width": "18rem","margin":"4%"}}>
       <div class="card-body">
       <img  className="card-img-top" src={props.image} />
         <h5 class="card-title">{props.Propertyname}</h5>
         <p class="card-text">{props.Propertydesc}</p>
         <a href="#" class="btn btn-success">Booked </a>
       </div>
       
     </div>
     &nbsp;
     </>
      )
    })}

    
   
  &nbsp;
    
    </>
  )
}
