import React from "react"
import MenuItem from "../menu-item/menu-item.component"

// Images
import hats from './images/hats.jpg'
import jackets from './images/jackets.jpg'
import sneakers from './images/sneakers.jpg'
import womens from './images/womens.jpg'
import mens from './images/mens.jpg'

export default class Directory extends React.Component {
  constructor() {
    super(); 

    this.state = {
      sections : [{
        title: 'hats', 
          imageUrl: hats, 
          id: 1, 
          linkUrl: 'hats'
        },
        {
          title: 'jackets', 
          imageUrl: jackets, 
          id: 2, 
          linkUrl: 'jackets'
        }, 
        {
          title: 'sneakers', 
          imageUrl: sneakers, 
          id: 3, 
          linkUrl: 'sneakers'
        }, 
        {
          title: 'womens', 
          imageUrl: womens, 
          size: 'large',
          id: 4, 
          linkUrl: 'womens'
        }, 
        {
          title: 'mens', 
          imageUrl: mens, 
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
    )
  }
}
