import React from "react";
import NavHeader from "../components/NavHeader";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ShopContent from "../components/ShopContent";
import Temporary from "../components/Temporary";
import ShopEditContent from "../components/ShopEditContent";

function ShopEdit() {
    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <ShopEditContent/>
            <Footer/>
        </>
    );
}

export default ShopEdit;