import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Pagination } from '../Pagination/pagination'
// import{ GoogleMap }from '@react-google-maps/api'

export default function Properties() {
  const[startindex,setstartindex]=useState(1);
  const[postperpage,setpostperpage]=useState(3);
 const [prop,setprop]=useState([])
  const  getproperties= async()=>{
    await axios.get("http://localhost:5000/Property/restaurant").then((res)=>setprop(res.data)).catch((err)=>console.log(err))
             
  }
 useEffect(()=>{
  getproperties()
 },[])
  
 const lastindex=startindex*postperpage
 const firsindex=lastindex-postperpage
 const currentprops=prop.slice(firsindex,lastindex) 
    return (
    <>
     &nbsp;
     <h1 style={{"margin":"4%","fontFamily":"italic"}}>RESTAURANTS & CAFE</h1>
     <hr style={{"color":"black"}}></hr>
       
        
    <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867250.9286021274!2d76.77476745!3d18.815426549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677051620764!5m2!1sen!2sin"} width="800" height="1000" style={{"border":"0" ,"allowfullscreen":"" ,"loading":"lazy" ,"referrerpolicy":"no-referrer-when-downgrade",} }align="right"></iframe>  
     {currentprops.map((proper)=>{
      return(
        <>
        
        <div  className="card" style={{"width": "18rem","margin":"4%"}} >
        <img className="card-img-top" src={proper.image} />
        <div className="card-body" >
          <h5 className="card-title">{proper.Propertyname}</h5>
          <p className="card-text">{proper.Propertydesc}</p>
          Prize:<b>{proper.prize}</b>&nbsp;
          <Link  to ={"Cart"}href="#" className="btn btn-primary">Book Now</Link>
        </div>
        
      </div>
      
      &nbsp;
      </>
            

      )
     })}
 
 <Pagination totalpost={prop.length} postperpage={postperpage} setCurrentpage={setstartindex} currentpage={startindex}></Pagination>
 &nbsp;
</>
  )
}
