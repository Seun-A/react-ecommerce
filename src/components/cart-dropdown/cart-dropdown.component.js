import './cart-dropdown.style.scss'
import Button from '../button/button.component'
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);
