// Images
import hats from './images/hats.jpg'
import jackets from './images/jackets.jpg'
import sneakers from './images/sneakers.jpg'
import womens from './images/womens.jpg'
import mens from './images/mens.jpg'


const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {  
    default:
      return state;
  }
}

export default directoryReducer;
