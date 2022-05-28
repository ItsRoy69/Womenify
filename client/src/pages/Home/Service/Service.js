import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

import service1 from "../../../assets/service1.jpg";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import service4 from "../../../assets/service4.png";
import service5 from "../../../assets/service5.png";
import service6 from "../../../assets/service6.png";

export default function Service({ customerDetails }) {
  return (
    <>
      <div className="container servicecontainer" id="services">
        <h1 className="serviceheader">Our Services</h1>

        <div className="cards_parent">

          <div className="card workcard">
            <div className=" workcard_body">
              <img
                src={service1}
                alt="Electrical Shops"

              />
              <h3 className="  text-truncate workname">
                Clinics
              </h3>
              <span className="text justify-content  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
              <div className="d-block  ">
                <Link to="/clinics">
                  <button className=" btn service_btn btn-warning">Clinics</button>
                </Link>
              </div>
            </div>
          </div>




          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service2} width={30} alt="Mechanic shops" />
              <h3 className="  text-truncate workname">Doctors</h3>
              <span className="text justify-content  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
              <div className="d-block  ">
                <Link to="/doctors">
                  <button className=" btn service_btn btn-warning">Doctors</button>
                </Link>
              </div>
            </div>
          </div>


          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">Tech Jobs</h3>
              <span className="text justify-content  ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
              <div className="d-block  ">
                <Link to="/jobs">
                  <button className=" btn service_btn btn-warning">Jobs</button>
                </Link>
              </div>
            </div>
          </div>





          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service5} width={30} alt="Shop Join" />
              <h3 className="  text-truncate workname">Join as Doctor</h3>
              <span className="text justify-content  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
              <br />
              <div className="d-block  ">
                <Link to="/docjoin">
                  <button className="  btn service_btn btn-warning" data-inline="true">
                    Join
                  </button>
                </Link>
                <Link to="/docsignin">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>





          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service6} width={30} alt="Workers Join" />
              <h3 className="  text-truncate workname">Join as Patient</h3>
              <span className="text justify-content  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
              <div className="d-block  ">
                <Link to="PatientJoin">
                  <button className=" btn service_btn btn-warning">Join</button>
                </Link>
                <Link to="/patientsignin">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>    



        </div>


      </div>
    </>
  );
}
