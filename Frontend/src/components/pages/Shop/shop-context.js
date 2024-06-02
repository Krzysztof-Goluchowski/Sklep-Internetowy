import React, {createContext, useState} from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    const [totalAmount, setTotalAmount] = useState(-1);

    const getTotalCartAmount = async () => {
        let totalAmount = 0;
        cartItems.forEach((details, id) => {
            if (details.quantity > 0) {
                const itemInfo = products.find(product => product.id === details.productId);
                if (itemInfo) {
                    totalAmount += details.quantity * itemInfo.price;
                }
            }
        });
        setTotalAmount(totalAmount.toFixed(2));
        return totalAmount.toFixed(2);
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/products/all");
            setProducts(response.data);
        } catch (error) {
            console.error("There was an error fetching the products!", error);
        }
    };


    const fetchCartItems = async () => {
        try {
            const response = await axios.post("http://localhost:8080/cart/all", {
                id: parseInt(localStorage.getItem('loggedUserId'))
            });
            const sortedCartItems = response.data.sort((a, b) => a.productId - b.productId);
            setCartItems(sortedCartItems);
            await getTotalCartAmount();
        } catch (error) {
            console.error("There was an error fetching the cart items!", error);
        }
    };

    const getCartItemQuantity = (productId) => {
        const item = cartItems.find(cartItem => cartItem.productId === productId);
        return item ? item.quantity : 0;
    }

    const updateCartItemCount = async (newAmount, id) => {
        if (newAmount < 0) newAmount = 0;

        try {
            const response = await axios.put(`http://localhost:8080/cart/set?quantity=${newAmount}`, {
                userId: parseInt(localStorage.getItem('loggedUserId')),
                productId: id
            });

            console.log("Product quantity set successfully:", response.data);

            await fetchCartItems();
            await setTotalAmount(getTotalCartAmount());
        } catch (error) {
            console.error("There was an error with setting product quantity!", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/categories/all');
            const data = await response.json();
            const categoriesArray = Object.entries(data).map(([name, id]) => ({
                name: name,
                id: id
            }));
            return [{ name: "Wszystko", id: null }, ...categoriesArray];
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };


    const contextValue = {products, cartItems, totalAmount,
        updateCartItemCount, getTotalCartAmount, setTotalAmount,
        fetchProducts, fetchCartItems, fetchCategories, getCartItemQuantity}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    );
};