import React from "react";
import './collection-item.style.scss'

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className="collection-item bg-dange pb-3">
    <div 
      className="image mb-2"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer w-100 d-flex justify-content-between">
      <span className="name">{ name }</span>
      <span className="price">${ price }</span>
    </div>
  </div>
)

export default CollectionItem
