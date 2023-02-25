import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../../slider/slider2'
export default function Admin() {
  return (
    <div>
    
      <button  style={{"margin":"1%"}} type="button" className="btn btn-dark">Dashboard    </button>
      <hr></hr>
    
      <div className="col-md-2 bg-light d-none d-md-block sidebar">
    <div className="left-sidebar">
    </div>
  </div><ul className="nav flex-column sidebar-nav">
  <Link to={""}><li className="nav-item">
    <a className="nav-link active" href="#">
      <svg className="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
      Users
    </a>
  </li></Link>
  <li className="nav-item">
    <Link  to={'Props'}className="nav-link" href="#">
      <svg className="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
      Properties
    </Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      <svg className="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
      Bookings
    </a>
  </li>
  <li className="nav-item">
    <Link  to={""}className="nav-link" href="#">
      <svg className="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
      Invoices
    </Link>
  </li>
  <li className="nav-item">
    <Link  to ={"Report"}className="nav-link" href="#">
      <svg className="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
      Reports
    </Link>
  </li>
</ul>
<Slider></Slider>
&nbsp;
</div>
  )
}
