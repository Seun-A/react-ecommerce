import './checkout-item.style.scss'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  
  return (
  <div className='checkout-item w-100 d-flex align-items-center justify-content-between align-self-start'>
    <div className='pe-3'>
      <img src={imageUrl} alt='item' className='w-100 h-100' />
    </div>

    <div>{name}</div>

    <div className='d-flex justify-content-center'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className='mx-2'>{quantity}</span>
      <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
    </div>

    <div>{price}</div>

    <div className='py-2' onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
})

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
