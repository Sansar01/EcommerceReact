import React, { useContext } from 'react'
import '../CartItem/CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import removeicon from '../assets/cart_cross_icon.png'

function CartItem() {

    const {getTotalCartAmount, all_products, cartItem, remvoeFromCart } = useContext(ShopContext)

    console.log("total ",cartItem);
    
    return (
        <div className="cartitem">
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>total</p>
                <p>Remove</p>

            </div>
            <hr />
            {
                all_products.map((e,i) => (
                    cartItem[e.id] > 0 ?
                        (
                            <div className="cartitem-format cartitem-format-main" key={i}>
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <img className="remove-icon" src={removeicon} onClick={() => { remvoeFromCart(e.id) }} alt="" />
                            </div>
                        ) :
                        (
                            null
                        )
                ))
            }
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                    
                </div>
                <div className="cartitem-promocode">
                        <p>If you have a prome code,Enter it here</p>
                        <div className="cartitem-promobox">
                            <input type="text" placeholder='PromoCode'/>
                            <button>Apply</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CartItem