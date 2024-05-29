import React, {createContext, useState} from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems2, setCartItems2] = useState(new Map());
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

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
            setCartItems(response.data);
        } catch (error) {
            console.error("There was an error fetching the cart items!", error);
        }
    };

    const getCartItemQuantity = (productId) => {
        const item = cartItems.find(cartItem => cartItem.productId === productId);
        return item ? item.quantity : 0;
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        cartItems2.forEach((quantity, id) => {
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
        try {
            console.log("wysylam " + parseInt(localStorage.getItem('loggedUserId')))
            console.log("wysylam " + id)

            const response = axios.put("http://localhost:8080/cart/add", {
                userId: parseInt(localStorage.getItem('loggedUserId')),
                productId: id
            })
        } catch (error) {
            console.error("There was an error with adding to the cart!", error);
        } finally {
            fetchCartItems().then();
        }
    };

    const removeFromCart = (id) => {
        setCartItems2((prev) => {
            const newCart = new Map(prev);
            const currentQuantity = newCart.get(id) || 0;
            if (currentQuantity > 0) {
                newCart.set(id, currentQuantity - 1);
            }
            return newCart;
        });
    };

    const updateCartItemCount = (newAmount, id) => {
        setCartItems2((prev) => {
            const newCart = new Map(prev);
            newCart.set(id, newAmount);
            return newCart;
        });
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


    const contextValue = {products, cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount,
        fetchProducts, fetchCartItems, fetchCategories, getCartItemQuantity}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    );
};