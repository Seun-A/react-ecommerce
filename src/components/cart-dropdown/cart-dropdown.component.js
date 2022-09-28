import './cart-dropdown.style.scss'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { createStructuredSelector } from 'reselect'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom'


const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  const history = useNavigate()
  const toCheckout = () => {
    toggleCartHidden()
    history('/checkout')
  }

  return (
  <div className='cart-dropdown d-flex flex-column bg-white'>
    <div className='cart-items d-flex flex-column'>
      {
        cartItems.length
        ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        : <span className='h-100 d-flex align-items-center justify-content-center pb-4 fs-4'>Your cart is empty</span>
      }
    </div>
    <Button onClick={toCheckout}>Go to checkout</Button>
  </div>
)}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDropdown);
