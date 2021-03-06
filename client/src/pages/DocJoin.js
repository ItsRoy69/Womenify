import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import shp1 from "../assets/shp1.svg";

import "../styles/DocJoin.css";

const ShopJoin = () => {
  return (
    <>
      <Navbar />

      <div className="shopjoin_container container">
        <div className="shopjoin_container_inner">
          <h2 className="shopjoin_header">Register your shop</h2>

          <div className="shopjoin_form1 row">
            <div className="col-lg-6 col-md-12">
              <img src={shp1} alt="" className="shp_img1" />
            </div>

            <div className="col-lg-6 col-md-12 form_col">
              <form>
                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />                

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="City"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                />
                
                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Hospital name"
                />

                <div class="nav-item dropdown">
                  <p
                    class="dropdown-toggle form1_control"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Occupation
                  </p>

                  <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/">
                        Diabetes
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Diabetes
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Diabetes
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="submit" className="btn btn-warning">
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopJoin;
