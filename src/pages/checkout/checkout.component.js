import './checkout.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'


const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page d-flex flex-column align-items-center overflow-scroll'>
    <div className='checkout-header w-100 d-flex justify-content-between align-self-start'>
      {
        ['Product', 'Description', 'Quantity', 'Price', 'Remove'].map((e, i) =>
          <div key={i} className='header-block text-center text-capitalize'>{e}</div>
        )
      }
    </div>

    { cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) }

    <div className='total'>TOTAL: ${total}</div>
  </div>
)

const matchStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(matchStateToProps)(CheckoutPage);
