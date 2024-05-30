import React, {useContext, useEffect, useState} from "react";
import {ShopContext} from "../Shop/shop-context";

export const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const { products, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    const product = products.find(product => product.id === productId);

    if (!product) {
        return <div>Loading product details...</div>;
    }

    const handleIncrement = () => {
        updateCartItemCount(quantity + 1, product.id);
    };

    return (
        <div className="cartItem">
            <img src={`data:image/png;base64,${product.image}`}/>
            <div className="description">
                <p><b>{product.name}</b></p>
                <p>${product.price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(product.id)}>-</button>
                    <input value={quantity} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}/>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
        </div>
    );
};