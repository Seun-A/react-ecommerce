import './cart-item.style.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item w-100 d-flex mb-3'>
    <img src={imageUrl} alt='item' />
    <div className='item-details flex-grow-1 d-flex flex-column align-items-start justify-content-center px-3'>
      <span>{name}</span>
      <span>{quantity} x ${price}</span>
    </div>
  </div>
)

export default CartItem;
