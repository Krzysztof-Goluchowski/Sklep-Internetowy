import React, {createContext, useState} from "react";
import useProductsHook from "../../common/useProductsHook";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(new Map());
    const products = useProductsHook();

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        cartItems.forEach((quantity, id) => {
            if (quantity > 0) {
                const itemInfo = products.find(product => product.id === id);
                if (itemInfo) {
                    totalAmount += quantity * itemInfo.price;
                }
            }
        });
        return totalAmount.toFixed(2);
    };

    const addToCart = (id) => {
        setCartItems((prev) => {
            const newCart = new Map(prev);
            newCart.set(id, (newCart.get(id) || 0) + 1);
            return newCart;
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => {
            const newCart = new Map(prev);
            const currentQuantity = newCart.get(id) || 0;
            if (currentQuantity > 0) {
                newCart.set(id, currentQuantity - 1);
            }
            return newCart;
        });
    };

    const updateCartItemCount = (newAmount, id) => {
        setCartItems((prev) => {
            const newCart = new Map(prev);
            newCart.set(id, newAmount);
            return newCart;
        });
    };

    const contextValue = {products, cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    );
};