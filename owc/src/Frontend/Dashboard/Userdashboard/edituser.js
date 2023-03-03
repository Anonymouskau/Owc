import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import url from '../../../config';

export  default function Edituser  ()  {
     const  history= useHistory()
  const email = sessionStorage.getItem("email");
  const name = sessionStorage.getItem("name");
  const phoneno = sessionStorage.getItem("phoneno");
  

    const [state,setstate]=useState({
    name:"",
    email:"",
    phoneno:""

    })

    const handler=(e)=>{


     const{name, value}=e.target
     
     setstate({
      ...state,[name]:value
     })

    }

  return (
    <>
    &nbsp;
    <div class='container1'>
    <div class="container1">  
  <form id="contact" >
    <h3>Use</h3>
    
    <fieldset>
      <input name='name' onChange={handler} value={state.name}placeholder= {name} type="text" tabindex="1" />
    </fieldset>
    <fieldset>
      <input name='email'   value={email}placeholder= {email} type="email" tabindex="2" readOnly />
    </fieldset>

    <fieldset>
      <input  name='phoneno' onChange={handler} state={state.phoneno}placeholder={phoneno} type="tel" tabindex="3"  />
    </fieldset>
    
    
    <fieldset>
      <button  onClick={()=>{
        axios.post(url.server+'/User/edituser',state).then(res=>{
                        alert('Please Login and checkupdated Status 🙂')
          
        }).catch(err=>{console.log(err)})
         



      }}name="submit" class="btn-primary-rounded"  >Submit</button>
    </fieldset>
    
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
