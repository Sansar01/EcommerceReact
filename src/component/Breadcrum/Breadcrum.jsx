import React from 'react'
import '../Breadcrum/Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

function Breadcrum(props) {
    const {product} = props;
    console.log("props",props.product);
    
  return (
    <div className="Breadcrum">
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum