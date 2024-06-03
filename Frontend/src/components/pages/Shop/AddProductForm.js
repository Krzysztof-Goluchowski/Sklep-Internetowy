import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import NavHeader from "../../layout/header/NavHeader";
import Temporary from "../../layout/Temporary";
import { ShopContext } from "./shop-context";

function LoginForm() {
    const { fetchCategories } = useContext(ShopContext);
    const [categories, setCategories] = useState([]);
    const [categoryID, setCategoryID] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [initialPrice, setInitialPrice] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        fetchCategories().then(fetchedCategories => {
            setCategories(fetchedCategories);
        }).catch(error => {
            console.error("There was an error fetching the categories!", error);
        });
    }, [fetchCategories]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const selectedCategory = categories.find(cat => cat.id === parseInt(categoryID));

            const formData = new FormData();
            formData.append('image', image);
            formData.append('category', JSON.stringify(selectedCategory));
            formData.append('name', productName);
            formData.append('price', price);
            formData.append('initial_price', initialPrice);

            const response = await axios.post('http://localhost:8080/products/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("DODANO!");
        } catch (error) {
            alert(error.response.data);
        }
    }

    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <div className="loginSpace">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <select value={categoryID} onChange={(e) => setCategoryID(e.target.value)} required>
                                <option value="" disabled>Select Category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Product name" required
                                   onChange={(e) => setProductName(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder="Price" required
                                   onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder="Initial Price" required
                                   onChange={(e) => setInitialPrice(e.target.value)}/>
                        </div>
                        <input type="file" required
                               onChange={(e) => setImage(e.target.files[0])}/>

                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
