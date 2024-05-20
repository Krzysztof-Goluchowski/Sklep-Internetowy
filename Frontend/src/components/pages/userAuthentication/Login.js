import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import Temporary from "../../layout/Temporary";
import Footer from "../../layout/Footer";

import React from "react";
import LoginForm from "./LoginForm";

function Login() {
    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <LoginForm/>
            <Footer/>
        </>
    );
}

export default Login;