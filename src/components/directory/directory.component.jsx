import React from "react";
import MenuItem from "../menu-item/menu-item.component";

export default class Directory extends React.Component {
  constructor() {
    super(); 

    this.state = {
      sections : [{
        title: 'hats', 
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', 
          id: 1, 
          linkUrl: 'hats'
        },
        {
          title: 'jackets', 
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png', 
          id: 2, 
          linkUrl: 'jackets'
        }, 
        {
          title: 'sneakers', 
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png', 
          id: 3, 
          linkUrl: 'sneakers'
        }, 
        {
          title: 'womens', 
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', 
          size: 'large',
          id: 4, 
          linkUrl: 'womens'
        }, 
        {
          title: 'mens', 
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', 
          size: 'large',
          id: 5, 
          linkUrl: 'mens'
      }]
    }
  }

  render() {
    return (
      <div className="container-fluid p-0 directory-menu">
        <div className="row m-0">
          {
            this.state.sections.map( ({ id, ...otherProps }) => {
              const ids = [1, 2, 3]
              const menItems = ids.includes(id) ?  <MenuItem key={id} {...otherProps} /> : null
              return menItems
            })
          }
        </div>

        <div className="row m-0">
          {
            this.state.sections.map( ({ id, ...otherProps }) => {
              const ids = [4, 5]
              const menItems = ids.includes(id) ?  <MenuItem key={id} {...otherProps} /> : null
              return menItems
            })
          }
        </div>
      </div>
    );
  }
}
