import './cart-dropdown.style.scss'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'


const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown d-flex flex-column bg-white'>
    <div className='cart-items d-flex flex-column'>
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <Button>Go to checkout</Button>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
