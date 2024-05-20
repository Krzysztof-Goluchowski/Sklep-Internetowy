import React from "react";
import leftImage from "../../../assets/styles/LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import {Link} from "react-router-dom";
import Register from "./Register";

function LoginForm() {
    return (
        <>
            <div className="loginSpace">
                <div className="wrapper">
                    <form action="">
                        <div className="input-box">
                            <input type="text" placeholder="Username" required/>
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Password" required/>
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