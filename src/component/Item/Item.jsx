import React from 'react'
import '../Item/Item.css'

function Item(props) {
    return (
        <div className="item">
            <img src={props.image} alt="item" />
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