import React, { useState } from "react";
import leftImage from "../../../assets/styles/LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from 'axios';

function LoginForm() {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/users/login', {
                email: email,
                password: password
            });
            alert(response.data);
        } catch (error) {
            alert(error.response.data);
        }
    };
    return (
        <>
            <div className="loginSpace">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" placeholder="Email" required value={email}
                                   onChange={(e) => setUsername(e.target.value)}/>
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Password" required value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <FaLock className='icon' />
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox"/>Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit">Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <Link to="/register">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;