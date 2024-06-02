import "../../../assets/styles/shop.css";
import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {ShopContext} from "./shop-context";

function ShopContentEdit() {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editedPrice, setEditedPrice] = useState("");

    const { products, fetchProducts } = useContext(ShopContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleEditClick = (index) => {
        setEditingIndex(index);
        const product = products.find(product => product.id === index);
        setEditedPrice(product.price);
    };

    const handleDeleteClick = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/products/${productId}`);
            const message = response.data;
            alert(message);
            window.location.reload();
        } catch (error) {
            alert(error.response.data);
        }


    };

    const handleSaveClick = () => {
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
                    <div style={{height: '50px'}}>
                    {editingIndex === product.id ? (
                            <input
                                type="text"
                                value={editedPrice}
                                onChange={(e) => setEditedPrice(e.target.value)}
                            />
                    ) : (
                        product.price
                    )}
                    </div>
                    {editingIndex === product.id ? (
                        <>
                            <button onClick={handleSaveClick}>Zapisz</button>
                            <button onClick={handleCancelClick}>Anuluj</button>
                        </>
                    ) : (
                        <>
                            <button style={{marginBottom: '10px'}} onClick={() => handleEditClick(product.id)}>Edytuj</button>
                            <button onClick={() => handleDeleteClick(product.id)}>Usuń</button>
                        </>
                    )}
                </div>
            ))}
        </div>
        <Link className="cartButton" style={{width: '30vw'}} to="/Shop">RETURN TO THE SHOP</Link>
    </div>);
}

export default ShopContentEdit;