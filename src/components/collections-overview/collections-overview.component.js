import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component'


const CollectionsOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} { ...otherProps } />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
