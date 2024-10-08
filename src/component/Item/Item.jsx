import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.css'

function Item(props) {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={window.scroll(0,0)} src={props.image} alt="item" /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    rs{props.new_price}
                </div>
                <div className="item-price-old">
                    rs{props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item