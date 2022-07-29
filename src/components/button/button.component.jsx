import React from "react";
import './button.style.scss'

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`custom-btn ${ isGoogleSignIn ? 'google-sign-in' : '' }`} { ...otherProps }>
    { children }
  </button>
)

export default Button;
