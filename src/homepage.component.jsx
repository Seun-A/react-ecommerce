import React from "react";
import './homepage.style.scss'

const Homepage = () => (
  <div className="homepage">

    <div className="container-fluid p-0 directory-menu">
      <div className="row m-0">
        <div className="col menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>          
        </div>

        <div className="col menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>          
        </div>

        <div className="col menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>          
        </div>
      </div>

      <div className="row m-0">
        <div className="col menu-item">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>          
        </div>

        <div className="col menu-item">
          <div className="content">
            <h1 className="title">MEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>          
        </div>
      </div>


    </div>
  </div>
)

export default Homepage