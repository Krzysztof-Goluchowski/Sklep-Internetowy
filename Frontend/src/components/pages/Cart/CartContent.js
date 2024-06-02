import React, {useContext, useEffect, useState} from "react";
// import {PRODUCTS} from "../../common/useProductsHook";
import {ShopContext} from "../Shop/shop-context";
import {CartItem} from "./cart-item";
import "../../../assets/styles/cart.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const CartContent = () => {
    const { cartItems, fetchCartItems, fetchProducts, getTotalCartAmount, setTotalAmount, totalAmount } = useContext(ShopContext);

    const navigate = useNavigate()

    useEffect(() => {
        fetchProducts();
        fetchCartItems();
    }, [cartItems]);

    const placeOrder = async () => {
        try {
            const response = await axios.put('http://localhost:8080/orders/place', {
                orderDate: new Date('2024-09-11'),
                shipCity: 'jakies miasto',
                shipPostalCode: 'jakis kod pocztowy',
                shipAddress: 'jakis adres',
                customersPhone: 'jakis telefon',
                customerId: localStorage.getItem('loggedUserId')
            });
            alert(response.data);
            console.log(response.data);
        } catch (error) {
            alert(error.response.data);
        }
    }

    if (!cartItems) {
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
                <button onClick={placeOrder}> Checkout </button>
            </div>
            ) : (
                <div className="emptyCart">
                    <h1>It's so empty and cold out here...</h1>
                    <h1>Visit our shop and something to your cart!</h1>
                </div>
            )}
        </div>
    );
};