import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeBtn from '../../components/stripe-btn/stripe-btn.component'
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutTotal
} from './checkout.style'


const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer className='d-flex flex-column align-items-center overflow-scroll'>
    <CheckoutHeader className='w-100 d-flex justify-content-between align-self-start'>
      {
        ['Product', 'Description', 'Quantity', 'Price', 'Remove'].map((e, i) =>
          <CheckoutHeaderBlock key={i} className='text-center text-capitalize'>{e}</CheckoutHeaderBlock>
        )
      }
    </CheckoutHeader>

    { cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) }

    <CheckoutTotal className='ms-auto mt-4'>TOTAL: ${total}</CheckoutTotal>
    <div className='d-none test-warning text-center text-danger my-4 fs-3'>
      *Please use the following test credit card for payments* <br />
      Card No.: <strong>4242 4242 4242 4242</strong> <br />
      EXP: <strong>Any Future Date</strong>; 
      CVV: <strong>Any 3 Digits</strong>
    </div>
    <StripeBtn price={total} />
  </CheckoutContainer>
)

const matchStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(matchStateToProps)(CheckoutPage);
