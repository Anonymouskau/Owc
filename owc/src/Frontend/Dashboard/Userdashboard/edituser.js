import React from 'react'

export  default function Edituser  ()  {

  const email = sessionStorage.getItem("email");
  const name = sessionStorage.getItem("name");
  const phoneno = sessionStorage.getItem("phoneno");

  return (
    <>
    &nbsp;
    <div class='container1'>
    <div class="container1">  
  <form id="contact" action="" method="post">
    <h3>User Edit Form</h3>
    
    <fieldset>
      <input  placeholder= {name} type="text" tabindex="1" />
    </fieldset>
    <fieldset>
      <input placeholder= {email} type="email" tabindex="2" readOnly />
    </fieldset>

    <fieldset>
      <input placeholder={phoneno} type="tel" tabindex="3"  />
    </fieldset>
    
    
    <fieldset>
      <button  onClick={(e)=>{
        console.log(e.target.value);
      }}name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
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
