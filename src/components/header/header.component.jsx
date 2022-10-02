import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {
  HeaderContainer,
  LogoContainer,
  LogoSvg,
  OptionLink
} from './header.style'


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer className='mb-3 d-flex justify-content-between'>
    <LogoContainer className='h-100 p-2 d-flex align-items-center' to="/">
      <LogoSvg />
    </LogoContainer>

    <div className='w-75 h-100 d-flex align-items-center justify-content-end'>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser ? 
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
          <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </div>

    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
