import React from 'react'
import data_product from '../assets/data'
import Item from '../Item/Item'
import '../RelatedProduct/RelatedProducts.css'

function RelatedProducts() {
    return (
        <div className="relatedproducts">
            <h2>Related Products</h2>
            <hr />
            <div className="relatedProducts-item">
                {
                    data_product.map((item, index) => (
                        <Item key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts
