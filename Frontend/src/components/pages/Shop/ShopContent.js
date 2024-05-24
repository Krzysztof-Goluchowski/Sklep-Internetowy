import "../../../assets/styles/shop.css";
// import {PRODUCTS} from "../../common/products";
import {ShopContext} from "./shop-context";
import chad from "../../../assets/images/chadquote2.png";
import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";

function ShopContent() {
    const categories = ["Wszystko", "Białko", "Dopalacze"];
    const [selectedCategory, setSelectedCategory] = useState("Wszystko");

    const { products, addToCart, cartItems } = useContext(ShopContext);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts =
        selectedCategory === "Wszystko"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    const calculateDiscountPercentage = (initialPrice, discountedPrice) => {
        const discount = initialPrice - discountedPrice;
        const discountPercentage = (discount / initialPrice) * 100;
        return Math.round(discountPercentage);
    };

    return (<div className="shopContainer">
        <img src={chad} className="chad"/>
        <div className="shopFilters">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={selectedCategory === category ? "filterButtonActive" : "filterButton"}
                >
                    {category}
                </button>
            ))}
        </div>
        <div className={"shopProducts"}>
            {filteredProducts.map((product) => (
                <div key={product.id} className="productShop">
                    <img src={`data:image/png;base64,${product.image}`} alt={product.name} className="productPhoto"/>
                    <p className="price">{product.name}</p>
                    {
                        product.price >= product.initialPrice ? (
                            <p className="price">{`$${product.initialPrice}`}</p>
                        ) : (
                            <>
                                <div className="priceContainer">
                                    <p className="oldPrice">{`$${product.initialPrice}`}</p>
                                    <p className="price">{`$${product.price}`}</p>
                                    <p className="discount">{calculateDiscountPercentage(product.initialPrice, product.price)}%</p>
                                </div>

                            </>

                        )
                    }
                    <p>
                        <button className="cartButton" onClick={() => addToCart(product.id)}>
                            Add to Cart {cartItems.get(product.id) > 0 && <> ({cartItems.get(product.id)}) </>}
                        </button>
                    </p>
                </div>
            ))}
        </div>
        <Link className="cartButton" to="/Shop/Edit">EDIT</Link>
    </div>);
}

export default ShopContent;