import React, {useState} from "react";
import leftImage from "../../../assets/styles/LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import NavHeader from "../../layout/header/NavHeader";
import Temporary from "../../layout/Temporary";

function LoginForm() {
    const [categoryId, setCategoryId] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [initialPrice, setInitialPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('category_id', categoryId);
            formDataToSend.append('name', productName);
            formDataToSend.append('price', price);
            formDataToSend.append('initial_price', initialPrice);
            formDataToSend.append('image', image);

            const response = await axios.post('http://localhost:8080/products/add', formDataToSend, {
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
                            <input type="number" placeholder="Category ID" required
                                   onChange={(e) => setCategoryId(e.target.value)}/>
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
                        <div className="input-box">
                            <input type="file" required
                                   onChange={(e) => setImage(e.target.files[0])}/>
                        </div>

                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;