import React, { useContext } from 'react'
import '../pages/Css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../component/assets/dropdown_icon.png'
import Item from '../component/Item/Item'

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext)

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
          {all_products.map((item, index) =>
            props.category === item.category ? (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ) : null,
          )}
        </div>
      <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory
