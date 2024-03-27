import React from "react";
import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import Footer from "../../layout/Footer";
import Temporary from "../../layout/Temporary";
import {CartContent} from "./CartContent";

function Cart() {
    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <CartContent/>
            <Footer/>
        </>
    );
}

export default Cart;