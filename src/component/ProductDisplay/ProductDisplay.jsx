import React from 'react'
import '../ProductDisplay/ProductDisplay.css'
import Staricon from '../assets/star_icon.png'
import StarDullicon from '../assets/star_dull_icon.png'

function ProductDisplay(props) {
    const {product} =  props;
  return (
    <div className="productDisplay">
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay-img">
               <img className='productDisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-star">
                <img src={Staricon} alt="" />
                <img src={Staricon} alt="" />
                <img src={Staricon} alt="" />
                <img src={Staricon} alt="" />
                <img src={StarDullicon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productDisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay