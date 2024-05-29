import React, {useContext, useEffect, useState} from "react";
import {ShopContext} from "../Shop/shop-context";

export const CartItem = (props) => {

    const {productId, quantity} = props.data;
    const {products, addToCart, removeFromCart, fetchCartItems, updateCartItemCount} = useContext(ShopContext);
    const [localQuantity, setLocalQuantity] = useState(Number(quantity));

    const product = products.find(product => product.id === productId);

    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <div className="cartItem">
            <img src={`data:image/png;base64,${product.image}`}/>
            <div className="description">
                <p><b>{product.name}</b></p>
                <p>${product.price}</p>
                <div className="countHandler">
                    <button onClick={() => {
                        removeFromCart(product.id);
                        fetchCartItems();
                    }}> - </button>
                    <input value={localQuantity} onChange={(e) => {
                        updateCartItemCount(Number(e.target.value), product.id);
                        fetchCartItems();
                    }}/>
                    <button onClick={() => {
                         addToCart(product.id);
                         setLocalQuantity(localQuantity + 1);
                    }}> + </button>
                </div>
            </div>
        </div>
    );
};