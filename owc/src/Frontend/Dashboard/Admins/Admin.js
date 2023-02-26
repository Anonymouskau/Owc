import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../../slider/slider2'
import './dashboard.css'
import Pie from './Pie'
import Chart from './Googlecharts'
import axios from 'axios'
export default function Admin() {

 const [regest,setregs]=useState(0)
 const email= localStorage.getItem("email");
 useEffect(()=>{
   axios.get("http://localhost:5000/Property/count").then((res)=>{
    setregs(res.data)
   })
 },[])
 console.log(email);
  return (
<>
<div class="grid-container">

      {/* <!-- Header --> */}
      
      {/* <!-- End Header --> */}

      {/* <!-- Sidebar --> */}
      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined"></span> {email}
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
        </div>

        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined"></span> Dashboard
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Users</span>
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">fact_check</span> Inventory
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">add_shopping_cart</span> Purchase Orders
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">shopping_cart</span> Sales Orders
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">poll</span> Reports
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">settings</span> Settings
            </a>
          </li>
        </ul>
      </aside>
      {/* <!-- End Sidebar --> */}

      {/* <!-- Main --> */}
      <main class="main-container">
        <div class="main-title">
          <p class="font-weight-bold">DASHBOARD</p>
        </div>

        <div class="main-cards">

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">  REGISTERED PROPERTIES</p>
              <span class="material-icons-outlined text-blue"></span>
            </div>
            <span class="text-primary font-weight-bold">{regest}</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">ACTIVE USERS</p>
              <span class="material-icons-outlined text-orange"></span>
            </div>
            <span class="text-primary font-weight-bold">83</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">TOTAL PROFITS</p>
              <span class="material-icons-outlined text-green"></span>
            </div>
            <span class="text-primary font-weight-bold">10230213 Rs</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">Total losses</p>
              <span class="material-icons-outlined text-red"></span>
            </div>
            <span class="text-primary font-weight-bold">1234123 Rs</span>
          </div>

        </div>

        <div class="charts">

          <div class="charts-card">
            <p class="chart-title">Top 5 Products</p>
            <div id="bar-chart"><Pie></Pie></div>
          </div>

          <div class="charts-card">
            <p class="chart-title">Purchase and Sales Orders</p>
            <div id="area-chart"><Chart></Chart></div>
          </div>

        </div>
      </main>
      {/* <!-- End Main --> */}
    
    </div>
    &nbsp;
</>    


  )
}
