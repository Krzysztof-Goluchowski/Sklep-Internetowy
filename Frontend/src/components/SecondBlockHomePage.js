import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ShopContext} from "./shop-context";
import { PRODUCTS } from "../products";
import React, {useContext} from "react";
import "./miniShop.css"



function SecondBlockHomePage() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <>
            <p className="buy-writing">Kup coś w naszym sklepie!</p>
            <div className="SecondBlockHomePage hidden">

                <Carousel responsive={responsive}>
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="product-style">
                            <img src={product.productImage} alt={product.productName} className="product-photo" />
                            <p className="price">{product.productName}</p>
                            <p className="price">{`$${product.price}`}</p>
                            <p>
                                <button className="button-style" onClick={() => addToCart(product.id)}>
                                    Add to Cart {cartItems[product.id] > 0 && <> ({cartItems[product.id]}) </>}
                                 </button>
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default SecondBlockHomePage;