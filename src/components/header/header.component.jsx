import './header.style.scss'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/cart-svgrepo-com.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


const Header = ({ currentUser, hidden }) => (
  <div className='header mb-3 d-flex justify-content-between'>
    <Link className='logo-container h-100 p-2 d-flex align-items-center' to="/"><Logo className='logo' /></Link>
    <div className='options w-75 h-100 d-flex align-items-center justify-content-end'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ? 
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : 
          <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>

    { hidden ? null : <CartDropdown /> }
    
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
