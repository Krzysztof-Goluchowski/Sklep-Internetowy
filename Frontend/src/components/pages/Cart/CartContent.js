import React, {useContext} from "react";
import {PRODUCTS} from "../../common/products";
import {ShopContext} from "../Shop/shop-context";
import {CartItem} from "./cart-item";
import "../../../assets/styles/cart.css"
import {useNavigate} from "react-router-dom";

export const CartContent = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate()

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0){
                        return <CartItem data={product} />
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">

                <p>Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/Shop")}> Continue Shopping </button>
                <button> Checkout </button>
            </div>
            ) : (
                <h1>Your Cart is Empty</h1>
            )}
        </div>
    );
};