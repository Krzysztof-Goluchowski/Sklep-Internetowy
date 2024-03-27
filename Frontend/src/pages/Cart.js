import React from "react";
import NavHeader from "../components/NavHeader";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Temporary from "../components/Temporary";
import {CartContent} from "../components/CartContent";

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