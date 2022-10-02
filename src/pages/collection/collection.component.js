import './collection.style.css'

import { useParams } from 'react-router-dom'

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.component'


const CollectionPage = ({ collections }) => {
  let params = useParams()
  let collection = params.collectionId

  const currentCollection = selectCollection(collection)(collections)
  const { title, items } = currentCollection


  return (
    <div className='collection-page d-flex flex-column'>
      <h2 className='title'>{title}</h2>
      <div className='items d-flex flex-wrap justify-content-center gap-3'>
        {
          items.map((item, i) => <CollectionItem key={i} item={item} /> )
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  collections: state
})

export default connect(mapStateToProps)(CollectionPage);
