import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Slider from '../slider/slider'

export default function Homepage1() {
  return (
    <div>
      <div>
        <Slider/>
        </div> &nbsp; &nbsp;
          <div>
        <b><h1 style={{"fontFamily":"Georgia,serif"}}>What are you looking for?</h1></b>
        </div>
<div className="container overflow-hidden">
 
 
 <div className="row gy-5">
    <div className="col-6">
    <NavLink className='nav-link active'to=''> <Link to={"Display"} style={{"color":"black"}}> <div style={{"textAlign":"right","fontfa":"san-serif"}}className="p-3 border bg-light">Office Spaces
      <i>&nbsp; 
        Private move-in ready offices</i></div></Link></NavLink>
    </div>

<div className="row gy-5">
    <div className="col-6">
    <NavLink className='nav-link active'to=''> <Link to={"Display"} style={{"color":"black"}}> <div style={{"textAlign":"right","fontfa":"san-serif"}}className="p-3 border bg-light">Dedicated desk
      <i>&nbsp; 
        Private move-in ready offices</i></div></Link></NavLink>
    </div>
</div>



<div className="row gy-5">
    <div className="col-6">
    <NavLink className='nav-link active'to=''> <Link to={"Display"} style={{"color":"black"}}> <div style={{"textAlign":"right","fontfa":"san-serif"}}className="p-3 border bg-light">Office space
      <i>&nbsp; 
        Private move-in ready offices</i></div></Link></NavLink>
    </div>
</div>




<div className="row gy-5">
    <div className="col-6">
    <NavLink className='nav-link active'to=''> <Link to={"Display"} style={{"color":"black"}}> <div style={{"textAlign":"right","fontfa":"san-serif"}}className="p-3 border bg-light">Office space
      <i>&nbsp; 
        Private move-in ready offices</i></div></Link></NavLink>
    </div>
</div>


    
  </div>
</div>
        
        </div>
    
  )
}
