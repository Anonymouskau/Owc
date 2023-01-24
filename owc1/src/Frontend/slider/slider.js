   import React from 'react'
   
   export default function Slider() {
     return (
       <>
         <div id="carouselExample" className="carousel slide">
  <div className
  
  
     
     
     
     
        ="carousel-inner">
    <div className="carousel-item active">
      <img src={'https://ctfassets.imgix.net/vh7r69kgcki3/6sUD4QhVDp9sFm8fJ1yhAT/dc71d0a4d437f359df25ea615c3f7632/Web_150DPI-20201008-199WaterSt-1.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'https://ctfassets.imgix.net/vh7r69kgcki3/1sf8UPWsXxXTeqpPuU4g8q/389e749f4966be5e653ffac0b36af647/Web_150DPI-WeWork_-_Lasalle_-_Chicago-17.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'https://ctfassets.imgix.net/vh7r69kgcki3/3p9GQagQYQ3rV9w48D70jp/e5531bf083fdce6c1352d95832208abf/GATEWAY_1_Hot_Seats_1013_copy.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </>
     )
   }
   