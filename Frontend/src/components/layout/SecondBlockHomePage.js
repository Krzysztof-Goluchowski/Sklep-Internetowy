import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ShopContext} from "../pages/Shop/shop-context";
import React, {useContext, useEffect} from "react";
import "../../assets/styles/miniShop.css"



function SecondBlockHomePage() {
    // const { products, addToCart, cartItems, fetchProducts } = useContext(ShopContext);
    const { products, addToCart, cartItems, getCartItemQuantity, fetchCartItems, fetchProducts } = useContext(ShopContext);

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


    useEffect(() => {
        fetchProducts();
        fetchCartItems();
    }, []);

    return (
        <>
            <p className="buy-writing">Kup coś w naszym sklepie!</p>
            <div className="SecondBlockHomePage hidden">

                <Carousel responsive={responsive}>
                    {products.map((product) => (
                        <div key={product.id} className="product-style">
                            <img src={`data:image/png;base64,${product.image}`} alt={product.productName} className="product-photo" />
                            <p className="price">{product.productName}</p>
                            <p className="price">{`$${product.price}`}</p>
                            <p>
                                {
                                    localStorage.getItem('isLoggedIn') === 'true' &&
                                    <button className="button-style" onClick={() => addToCart(product.id)}>
                                        Add to Cart {getCartItemQuantity(product.id) > 0 && <> ({getCartItemQuantity(product.id)}) </>}
                                    </button>
                                }

                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default SecondBlockHomePage;