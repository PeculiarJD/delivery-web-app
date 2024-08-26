import React, { useContext} from 'react'
import './FoodItem.css' 
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../Context/StoreContext'
import { useState } from 'react'

const FoodItem = ({id, name, price, description, image}) => {
  
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id]
           ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} 
           />
           :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="icon" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="icon" />
           </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="image"className='rating' />
        </div>
        <p className="food-item-description">
            {description}
        </p>
        <p className='food-item-price'>{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
