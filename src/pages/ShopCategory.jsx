import React, { useContext } from 'react'
import '../pages/Css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'

function ShopCategory() {

  const{all_product} = useContext(ShopContext)
  return (
    <div>ShopCategory</div>
  )
}

export default ShopCategory