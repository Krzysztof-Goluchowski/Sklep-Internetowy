import "../../../assets/styles/shop.css";
import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useProductsHook from "../../common/useProductsHook";
import axios from "axios";
import {ShopContext} from "./shop-context";

function ShopContentEdit() {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editedPrice, setEditedPrice] = useState("");

    // const products = useProductsHook();

    const { products, fetchProducts } = useContext(ShopContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleEditClick = (index) => {
        setEditingIndex(index);
        const product = products.find(product => product.id === index);
        setEditedPrice(product.price);
    };

    const handleSaveClick = () => {
        // products[editingIndex].price = editedPrice;
        const newPrice = parseFloat(editedPrice);
        if (!isNaN(newPrice)) {
            axios.put(`http://localhost:8080/products/edit-price/${editingIndex}`, {
                price: newPrice
            })
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                console.error("There was an error updating the products!", error);
            })
            .finally(() => {
                setEditingIndex(-1);
                fetchProducts();
            });
        }
    };

    const handleCancelClick = () => {
        setEditingIndex(-1);
    };

    // console.log("halo" + editingIndex);

    return (<div className="shopEditContainer">
        <div className={"shopProducts"}>
            {products.map((product) => (
                <div key={product.id} className="productShop">
                    <img src={`data:image/png;base64,${product.image}`} alt={product.productName} className="productPhoto"/>
                    <p className="price">{product.productName}</p>
                    <p>Initial price: </p>
                    <p className="price">{`$${product.initialPrice}`}</p>
                    <p>Current price: </p>
                    <p className="price">{`$${product.price}`}</p>
                    <strong>Cena: </strong>
                    {editingIndex === product.id ? (
                        <input
                            type="text"
                            value={editedPrice}
                            onChange={(e) => setEditedPrice(e.target.value)}
                        />
                    ) : (
                        product.price
                    )}
                    {editingIndex === product.id ? (
                        <>
                            <button onClick={handleSaveClick}>Zapisz</button>
                            <button onClick={handleCancelClick}>Anuluj</button>
                        </>
                    ) : (
                        <button onClick={() => handleEditClick(product.id)}>Edytuj</button>
                    )}
                </div>
            ))}
        </div>
        <Link className="cartButton" to="/Shop">RETURN TO THE SHOP</Link>
    </div>);
}

export default ShopContentEdit;