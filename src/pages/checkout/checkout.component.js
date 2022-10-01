import './checkout.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeBtn from '../../components/stripe-btn/stripe-btn.component'


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

    <div className='total ms-auto mt-4'>TOTAL: ${total}</div>
    <div className='test-warning text-center text-danger my-4 fs-3'>
      *Please use the following test credit card for payments* <br />
      Card No.: <strong>4242 4242 4242 4242</strong> <br />
      EXP: <strong>Any Future Date</strong>; 
      CVV: <strong>Any 3 Digits</strong>
    </div>
    <StripeBtn price={total} />
  </div>
)

const matchStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(matchStateToProps)(CheckoutPage);
