import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ShopContext} from "../pages/Shop/shop-context";
import React, {useContext} from "react";
import "../../assets/styles/miniShop.css"



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

    const { products, addToCart, cartItems } = useContext(ShopContext);

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
                                <button className="button-style" onClick={() => addToCart(product.id)}>
                                    Add to Cart {cartItems.get(product.id) > 0 && <> ({cartItems.get(product.id)}) </>}
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