import React, {useContext, useEffect, useState} from "react";
// import {PRODUCTS} from "../../common/useProductsHook";
import {ShopContext} from "../Shop/shop-context";
import {CartItem} from "./cart-item";
import "../../../assets/styles/cart.css"
import {useNavigate} from "react-router-dom";

export const CartContent = () => {
    const { cartItems, fetchCartItems, fetchProducts, getTotalCartAmount, totalAmount } = useContext(ShopContext);
    // const [totalAmount, setTotalAmount] = useState(getTotalCartAmount);

    const navigate = useNavigate()

    useEffect(() => {
        fetchProducts();
        fetchCartItems();
    }, [cartItems]);

    if (!cartItems || cartItems.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>

            <div className="cartItems">
                {cartItems.map((cartItem) => {
                    return <CartItem data={cartItem} />
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