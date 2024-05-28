import "../../../assets/styles/shop.css";
import { ShopContext } from "./shop-context";
import chad from "../../../assets/images/chadquote2.png";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ShopContent() {
    const categories = [
        { name: "Wszystko", id: null },
        { name: "Białko", id: 1 },
        { name: "Węglowodany", id: 2 },
        { name: "Witaminy", id: 3 },
    ];
    const [selectedCategory, setSelectedCategory] = useState("Wszystko");

    const [isEmployee, setIsEmployee] = useState(false);

    const { products, addToCart, cartItems, fetchProducts } = useContext(ShopContext);

    useEffect(() => {
        fetchProducts();
        console.log(localStorage.getItem('isLoggedIn'))
        console.log(localStorage.getItem('isEmployee'))
        setIsEmployee(localStorage.getItem('isEmployee') === 'true');
    }, [fetchProducts]);

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
        : products.filter(product => product.categoryID === categories.find(category => category.name === selectedCategory).id);

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
                        <p className="price">{product.name}</p>
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
                            <button className="cartButton" onClick={() => addToCart(product.id)}>
                                Add to Cart {cartItems.get(product.id) > 0 && <> ({cartItems.get(product.id)}) </>}
                            </button>
                        </p>
                    </div>
                ))}
            </div>
            {isEmployee && <Link className="cartButton" to="/Shop/Edit">EDIT</Link>}
        </div>
    );
}

export default ShopContent;
