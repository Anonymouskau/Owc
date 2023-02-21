import React from 'react'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'

export default function properties() {
 const  getproperties= async()=>{
   axios.get("http//localhost:5000/Property/property")

  }
  useEffect(()=>{
    getproperties()
  },[])
     
    return (
    <>
    <h1>OFFICE SPACES</h1>
    <div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={"https://ctfassets.imgix.net/vh7r69kgcki3/4IY416EqySXcQq3A51yzM4/17de763e2381784ae66adc608cbdbce3/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?auto=format%20compress&fit=crop&q=50&w=1350&h=759"} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link  to ={"Cart"}href="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
&nbsp;
<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={"https://ctfassets.imgix.net/vh7r69kgcki3/4IY416EqySXcQq3A51yzM4/17de763e2381784ae66adc608cbdbce3/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?auto=format%20compress&fit=crop&q=50&w=1350&h=759"} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link  to ={"Cart"}href="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
&nbsp;
<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={"https://ctfassets.imgix.net/vh7r69kgcki3/4IY416EqySXcQq3A51yzM4/17de763e2381784ae66adc608cbdbce3/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?auto=format%20compress&fit=crop&q=50&w=1350&h=759"} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link  to ={"Cart"}href="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
&nbsp;
<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={"https://ctfassets.imgix.net/vh7r69kgcki3/4IY416EqySXcQq3A51yzM4/17de763e2381784ae66adc608cbdbce3/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?auto=format%20compress&fit=crop&q=50&w=1350&h=759"} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link  to ={"Cart"}href="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
&nbsp;
</>
  )
}
