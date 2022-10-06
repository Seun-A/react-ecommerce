import './collection-preview.style.scss'

import { useNavigate } from "react-router-dom"
import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({ title, items }) => {
  let history = useNavigate()

  return (
    <div className="collection-preview mb-4">
      <h1 className="preview-title d-inline-block mt-3"
        onClick={() => history(`/shop/${title.toLowerCase()}`)}>{title.toUpperCase()}
      </h1>
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
}

export default CollectionPreview;
