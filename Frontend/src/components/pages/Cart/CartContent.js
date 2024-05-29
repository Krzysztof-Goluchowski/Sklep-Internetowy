import React, {useContext, useEffect} from "react";
// import {PRODUCTS} from "../../common/useProductsHook";
import {ShopContext} from "../Shop/shop-context";
import {CartItem} from "./cart-item";
import "../../../assets/styles/cart.css"
import {useNavigate} from "react-router-dom";

export const CartContent = () => {
    const { products, cartItems, fetchCartItems, fetchProducts, getTotalCartAmount } = useContext(ShopContext);
    // const totalAmount = getTotalCartAmount();

    const navigate = useNavigate()
    fetchProducts();

    useEffect(() => {
        fetchProducts();
        fetchCartItems();
    }, []);

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            {/*<div className="cartItems">*/}
            {/*    {products.map((product) => {*/}
            {/*        if ((cartItems.get(product.id) || 0) !== 0){*/}
            {/*            return <CartItem data={product} />*/}
            {/*        }*/}
            {/*    })}*/}
            {/*</div>*/}

            <div className="cartItems">
                {cartItems.map((cartItem) => {
                    return <CartItem data={cartItem} />
                })}
            </div>

            {/*{totalAmount > 0 ? (*/}
            {/*    <div className="checkout">*/}

            {/*    <p>Subtotal: ${totalAmount}</p>*/}
            {/*    <button onClick={() => navigate("/Shop")}> Continue Shopping </button>*/}
            {/*    <button> Checkout </button>*/}
            {/*</div>*/}
            {/*) : (*/}
            {/*    <h1>Your Cart is Empty</h1>*/}
            {/*)}*/}
        </div>
    );
};