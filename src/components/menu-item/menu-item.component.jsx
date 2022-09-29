import './menu-item.style.scss'
import { useNavigate } from "react-router-dom"

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let history = useNavigate()
  const toShop = () => history(`/shop/${linkUrl}`)
  
  return (
    <div className={`col p-0 menu-item ${size}`} onClick={toShop}>
      <div 
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{ title.toUpperCase() }</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>          
    </div>
  )
}

export default MenuItem;
