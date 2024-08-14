import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../component/Breadcrum/Breadcrum';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../component/Description/DescriptionBox';
import RelatedProducts from '../component/RelatedProduct/RelatedProducts';

function Product() {
  const {all_products} = useContext(ShopContext)
  const {productid} = useParams(); 

  const product = all_products.find((e)=>e.id === Number(productid))
  
  return (
    <>
      <Breadcrum product={product}/>
      <ProductDisplay product ={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </>
  )
}

export default Product