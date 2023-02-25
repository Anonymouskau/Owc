import React, { useState ,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import userStore from "../Zustand/Zustandstore";

export default function Navbar() {
  
  
  
  const user=localStorage.getItem("email")
  const dropdown=()=>{
  return(
    <Dropdown style={{"align":"end"}}>
      <Dropdown.Toggle variant="info" id="dropdown-basic-button">
         👤 {user }
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to={'Admin'}><Dropdown.Item  href="#/action-1">Dashboard</Dropdown.Item></Link>
        
        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  )
  }
  useEffect(()=>{
    dropdown()
  },[])
  const history = useHistory();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div className="navbar">


          
      <div className="container-fluid">
        <label className="navbar-brand">Owc</label>
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
{dropdown()}
        </nav>  

    // </nav>
  );
}
