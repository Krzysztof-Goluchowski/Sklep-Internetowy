import "../../../assets/styles/shop.css";
import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import useProductsHook from "../../common/useProductsHook";

function ShopContentEdit() {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editedPrice, setEditedPrice] = useState("");

    const products = useProductsHook();

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditedPrice(products[index].price);
    };

    const handleSaveClick = () => {
        products[editingIndex].price = editedPrice;
        setEditingIndex(-1);
    };

    const handleCancelClick = () => {
        setEditingIndex(-1);
    };

    return (<div className="shopEditContainer">
        <div className={"shopProducts"}>
            {products.map((product, index) => (
                <div key={product.id} className="productShop">
                    <img src={`data:image/png;base64,${product.image}`} alt={product.productName} className="productPhoto"/>
                    <p className="price">{product.productName}</p>
                    <p>Initial price: </p>
                    <p className="price">{`$${product.initialPrice}`}</p>
                    <p>Current price: </p>
                    <p className="price">{`$${product.price}`}</p>
                    <strong>Cena: </strong>
                    {editingIndex === index ? (
                        <input
                            type="text"
                            value={editedPrice}
                            onChange={(e) => setEditedPrice(e.target.value)}
                        />
                    ) : (
                        product.price
                    )}
                    {editingIndex === index ? (
                        <>
                            <button onClick={handleSaveClick}>Zapisz</button>
                            <button onClick={handleCancelClick}>Anuluj</button>
                        </>
                    ) : (
                        <button onClick={() => handleEditClick(index)}>Edytuj</button>
                    )}
                </div>
            ))}
        </div>
        <Link className="cartButton" to="/Shop">RETURN TO THE SHOP</Link>
    </div>);
}

export default ShopContentEdit;