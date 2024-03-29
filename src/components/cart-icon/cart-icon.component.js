import './cart-icon.style.scss'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div
    className='cart-icon d-flex align-items-center justify-content-center'
    onClick={toggleCartHidden}
  >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count fw-bold text-center'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
