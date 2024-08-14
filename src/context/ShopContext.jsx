import { createContext, useState } from "react";
import all_products from '../component/assets/all_product'

export const ShopContext = createContext(null);

const  getDefaultCart = ()=>{
    let cart={}
    for(let index=0;index<all_products.length+1;index++)
    {
        cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props)=>{

    const [cartItem,setCartItem] = useState(getDefaultCart)

    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const getTotalCartAmount = ()=>{
        let total = 0;
        for(const item in cartItem)
        {
          if(cartItem[item]>0)
          {
            let iteminfo = all_products.find((product)=>product.id===Number(item))
            total += iteminfo.new_price * cartItem[item];
          }
        }
        return total;
    }

    const remvoeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartItem = ()=>{
        let totalItem = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem += cartItem[item];
            }
        }
        return totalItem
    }

    const contextValue = {getTotalCartAmount,all_products,cartItem,addToCart,remvoeFromCart,getTotalCartItem}
    
  
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider