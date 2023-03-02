import React from 'react'
import GoogleChart from './Googlecharts'
import Pie from './Pie'
import Animatedchart from './Animatedchart'
export default function Report() {
  return (
    <> 

       <h1>Company Reports</h1>
       <Pie></Pie>

       <br/>
       <GoogleChart></GoogleChart>
       <br/>
        <Animatedchart></Animatedchart>   
       </>
  )
}
