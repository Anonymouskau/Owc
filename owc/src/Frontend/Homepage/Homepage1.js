import React from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "../slider/slider";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiOfficeChair } from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import Testimonial from "../Testimonial/testimonial";
export default function Homepage1() {
  return (
    <div>
      <div>
        <Slider />
      </div>{" "}
      &nbsp; &nbsp;
      <div>
        <b>
          <h1 style={{ fontFamily: "Georgia,serif" }}>
            {" "}
            &nbsp; &nbsp; &nbsp;What are you looking for?
          </h1>
        </b>
      </div>
      <div className="container overflow-hidden">
        <div className="row gy-5">
          <div className="col-6">
            <NavLink className="nav-link active" to="">
              {" "}
              <Link to={"Display"} style={{ color: "black" }}>
                {" "}
                <div
                  style={{ textAlign: "right", fontfa: "san-serif" }}
                  className="p-3 border bg-light"
                >
                  <HiBuildingOffice2
                    style={{ width: "2.5rem" }}
                  ></HiBuildingOffice2>{" "}
                  <br></br>Office Spaces
                  <i>&nbsp; Private move-in ready offices</i>
                </div>
              </Link>
            </NavLink>
          </div>

          <div className="row gy-5">
            <div className="col-6">
              <NavLink className="nav-link active" to="">
                {" "}
                <Link to={"Desk"} style={{ color: "black" }}>
                  {" "}
                  <div
                    style={{ textAlign: "right", fontfa: "san-serif" }}
                    className="p-3 border bg-light"
                  >
                    <GiOfficeChair></GiOfficeChair> <br />
                    &nbsp; Dedicated desk
                    <i>&nbsp; Desk and collabrative spaces</i>
                  </div>
                </Link>
              </NavLink>
            </div>
          </div>

          <div className="row gy-5">
            <div className="col-6">
              <NavLink className="nav-link active" to="">
                {" "}
                <Link to={"Restaurant"} style={{ color: "black" }}>
                  {" "}
                  <div
                    style={{ textAlign: "right", fontfa: "san-serif" }}
                    className="p-3 border bg-light"
                  >
                    <IoRestaurantSharp></IoRestaurantSharp> <br />
                    &nbsp;Restaurant space
                    <i>&nbsp; Cafes & Restaurant Setups </i>
                  </div>
                </Link>
              </NavLink>
            </div>
          </div>

          <div className="row gy-5">
            <div className="col-6">
              <NavLink className="nav-link active" to="">
                {" "}
                <Link to={"Education"} style={{ color: "black" }}>
                  {" "}
                  <div
                    style={{ textAlign: "right", fontfa: "san-serif" }}
                    className="p-3 border bg-light"
                  >
                    <ImBooks></ImBooks>
                    <br></br> &nbsp; Educational
                    <i>&nbsp; Classrooms Setups</i>
                  </div>
                </Link>
              </NavLink>
            </div>
          </div>
      
         

          <Testimonial />


        </div>
      </div>
    </div>
  );
}
