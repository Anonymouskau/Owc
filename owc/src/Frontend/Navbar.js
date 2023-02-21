import React from "react";
import { Link, useHistory } from "react-router-dom";
import '../App.css'
export default function Navbar() {
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
                  history.push("/About us");
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
                  history.push("/Contact Us");
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

<nav   className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <ul className="navbar-nav">
    
      <li className="nav-item dropdown"> */}
      
        <Link className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink"
          role="button" data-mdb-toggle="dropdown" aria-expanded="false"> 
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
            height="22" alt="Avatar" loading="lazy" />
         </Link>

          
        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <Link className="dropdown-item" href="#">My profile</Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">Settings</Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">Logout</Link>
          </li>
        </ul> */}
      {/* </li>
    </ul> */}
  </div>
</nav>


        </nav>  

    // </nav>
  );
}
