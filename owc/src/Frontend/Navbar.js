import React, { useState ,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import userStore from "../Zustand/Zustandstore";

export default function Navbar() {
  
  const[bstate,setbstate]=useState(false)
  const[state,setuser]=useState("")
  const user=sessionStorage.getItem("email")
  const role=sessionStorage.getItem("role")
  
  const [dropd,setdropd]=useState()

  const dropdown=()=>{
  return(
    <nav
    className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="navbar">


        
    <div className="container-fluid">
      <label style={{"font-family": 'Source Serif Pro', 'fontSize':'2.5rem'}} className="navbar-brand">OwC</label>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <label
              onClick={() => {
                history.push("home");
                
              }}
              className="nav-link nav-link-ltr"
              aria-current="page"
            >
              Home
            </label>
          </li>
          <li className="nav-item">
            <label
              onClick={() => {
                history.push("/Login");
              }}
              className="nav-link nav-link-ltr"
              aria-current="page"
            >
              Login
            </label>
          </li>

          <li className="nav-item">
            <label
              onClick={() => {
                history.push("/register");
              }}
              className="nav-link nav-link-ltr"
              aria-current="page"
            >
              Register
            </label>
          </li>

          <li className="nav-item">
            <label
              onClick={() => {
                history.push("/Aboutus");
              }}
              className="nav-link nav-link-ltr"
              aria-current="page"
            >
              About us
            </label>
          </li>

          <li className="nav-item">
            <label
              onClick={() => {
                history.push("/Contactus");
              }}
              className="nav-link nav-link-ltr"
              aria-current="page"
            >
              Contact us
            </label>
          </li>
          <form className="d-flex" role="search">
          
        </form>
          <li className="nav-item"></li>
        </ul>
        
      </div>
    </div>



{/* <Link className="nav-link nav-link-ltr" href="#">Home</Link>
<Link className="nav-link nav-link-ltr" href="#">About</Link>
<Link className="nav-link nav-link-ltr" href="#">Contact</Link>
<Link className="nav-link nav-link-ltr" href="#">Blog</Link> */}
</div>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;


    <Dropdown  class='nav justify-content-end'style={{"align":"end"}}>
      <Dropdown.Toggle variant="info" id="dropdown-basic-button">
         👤 {bstate ? user:""}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link  className='nav-link active' to={()=>{
        if(role==="Begin Journey With Us"){
           return "Architect"
        }
        else if(role=="Admin"){
          return "Admin"
        }
        else if(role=="Searching for WorkSpace"){
          return "User"
        }
        else{
          return 'home'
        }
        }}><Dropdown.Item  href="#/action-1">Dashboard</Dropdown.Item></Link>
        <br/>
        <Link className='nav-link active'><Dropdown.Item  href="#/action-3">Logout</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
</nav>
  )
  }

  useEffect(()=>{
    if(user){
      setuser(user)
     setbstate(true)
    }
  
  },[state])
  const history = useHistory();
  return (
  <>{dropdown()}</>

    // </nav>
  );
}
