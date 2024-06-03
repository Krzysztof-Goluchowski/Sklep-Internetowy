import "../../../assets/styles/shop.css";
import { ShopContext } from "./shop-context";
import chad from "../../../assets/images/chadquote2.png";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ShopContent() {
    const [categories, setCategories] = useState([{ name: "Wszystko", id: null }]);
    const [selectedCategory, setSelectedCategory] = useState("Wszystko");

    const [isEmployee, setIsEmployee] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { products, addToCart, cartItems, fetchProducts, fetchCategories, fetchCartItems, getCartItemQuantity, updateCartItemCount } = useContext(ShopContext);

    useEffect(() => {
        fetchProducts();
        fetchCartItems();
        fetchCategories().then(fetchedCategories => {
            setCategories(fetchedCategories);
        });
        setIsEmployee(localStorage.getItem('isEmployee') === 'true');
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const calculateDiscountPercentage = (initialPrice, discountedPrice) => {
        const discount = initialPrice - discountedPrice;
        const discountPercentage = (discount / initialPrice) * 100;
        return Math.round(discountPercentage);
    };

    const filteredProducts = selectedCategory === "Wszystko"
        ? products
        : products.filter(product => {
            const category = categories.find(category => category.name === selectedCategory);
            return category ? product.category.id === category.id : false;
        });

    return (
        <div className="shopContainer">
            <img src={chad} className="chad" />
            <div className="shopFilters">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => handleCategoryClick(category.name)}
                        className={selectedCategory === category.name ? "filterButtonActive" : "filterButton"}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="shopProducts">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="productShop">
                        <img src={`data:image/png;base64,${product.image}`} alt={product.name} className="productPhoto" />
                        <div className="name-container">
                            <p className="price">{product.name}</p>
                        </div>
                        {product.price >= product.initialPrice ? (
                            <p className="price">{`$${product.initialPrice}`}</p>
                        ) : (
                            <>
                                <div className="priceContainer">
                                    <p className="oldPrice">{`$${product.initialPrice}`}</p>
                                    <p className="price">{`$${product.price}`}</p>
                                    <p className="discount">{calculateDiscountPercentage(product.initialPrice, product.price)}%</p>
                                </div>
                            </>
                        )}
                        <p>
                            {
                                isLoggedIn &&
                                <button className="cartButton" onClick={() => updateCartItemCount(getCartItemQuantity(product.id) + 1, product.id)}>
                                    Add to Cart {getCartItemQuantity(product.id) > 0 && <> ({getCartItemQuantity(product.id)}) </>}
                                </button>
                            }
                        </p>
                    </div>
                ))}
            </div>
            <div className="editButtons">
                {isEmployee && <Link className="cartButton" style={{width: '20vw'}} to="/Shop/Edit">EDIT</Link>}
                {isEmployee && <Link className="cartButton" style={{width: '20vw'}} to="/Shop/Add">Add Product</Link>}
                {isEmployee && <Link className="cartButton" style={{width: '20vw'}} to="/Shop/Raport">See annual sales report</Link>}
            </div>

        </div>
    );
}

export default ShopContent;
