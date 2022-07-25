import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'

import { ReactComponent as Logo } from '../../assets/cart-svgrepo-com.svg'

const Header = () => (
  <div className='header w-100 mb-3 d-flex justify-content-between'>
    <Link className='logo-container h-100 p-2 d-flex align-items-center' to="/"><Logo className='logo' /></Link>
    <div className='options w-75 h-100 d-flex align-items-center justify-content-end'>
      <Link className='option' to='/'>HOME</Link>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      <Link className='option' to='/signin'>SIGN IN</Link>
    </div>
  </div>
)

export default Header
