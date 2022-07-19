import React from "react";
import { withRouter } from 'react-router-dom' // Higher Order Function

import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`col p-0 menu-item ${size}`}>
    <div 
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>          
  </div>
)

export default MenuItem;
