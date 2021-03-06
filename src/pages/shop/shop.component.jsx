import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOPDATA from "./shop.data";


class ShopPage extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      collections: SHOPDATA
    };
  }

  render() {
    const { collections } = this.state

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} { ...otherProps } />
        ))}
      </div>
    );
  }
}

export default ShopPage
