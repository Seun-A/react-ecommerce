import CollectionItem from "../collection-item/collection-item.component"
import './collection-preview.style.scss'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview mb-4">
    <h1 className="preview-title mt-3">{ title.toUpperCase() }</h1>
    <div className="preview d-flex overflow-auto">
      {
        items
        .filter((item, idx) => idx < 5 )
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;
