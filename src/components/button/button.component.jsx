import React from "react";
import './button.style.scss'

const Button = ({ children, ...otherProps }) => (
  <button className="custom-btn" { ...otherProps }>
    { children }
  </button>
)

export default Button;
