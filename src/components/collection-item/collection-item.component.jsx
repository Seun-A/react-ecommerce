import './collection-item.style.scss'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import Button from '../button/button.component'


const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
  <div className="collection-item pb-3 d-flex flex-column align-items-center">
    <div 
      className="image mb-2 w-100 h-100"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer w-100 d-flex justify-content-between bg-white">
      <span className="name">{ name }</span>
      <span className="price">${ price }</span>
    </div>

    <Button onClick={()=>addItem(item)} inverted>Add to cart</Button>
  </div>
)}

const matchDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(
  null,
  matchDispatchToProps
)(CollectionItem)
