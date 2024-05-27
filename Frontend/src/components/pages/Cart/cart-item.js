import React, {useContext} from "react";
import {ShopContext} from "../Shop/shop-context";

export const CartItem = (props) => {
    const {id, name, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={`data:image/png;base64,${image}`}/>
            <div className="description">
                <p><b>{name}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems.get(id)} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};