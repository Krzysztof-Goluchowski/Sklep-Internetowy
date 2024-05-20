import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import Temporary from "../../layout/Temporary";
import Footer from "../../layout/Footer";

import React from "react";
import RegisterForm from "./RegisterForm";

function Register() {
    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <RegisterForm/>
            <Footer/>
        </>
    );
}

export default Register;