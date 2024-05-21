import React, {useState} from "react";
import leftImage from "../../../assets/styles/LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";

function LoginForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/users/register', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                isEmployee: false,
                password: password
            });
            alert(response.data);
        } catch (error) {
            alert(error.response.data);
        }
    }

    return (
        <>
            <div className="loginSpace">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" placeholder="First name" required
                                   onChange={(e) => setFirstName(e.target.value)}/>
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Last name" required
                                   onChange={(e) => setLastName(e.target.value)}/>
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Email" required
                                   onChange={(e) => setEmail(e.target.value)}/>
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <FaLock className='icon' />
                        </div>

                        <button type="submit">Register</button>

                        <div className="register-link">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;