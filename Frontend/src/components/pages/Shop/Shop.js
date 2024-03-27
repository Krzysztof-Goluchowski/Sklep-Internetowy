import React from "react";
import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import Footer from "../../layout/Footer";
import ShopContent from "./ShopContent";
import Temporary from "../../layout/Temporary";

function Shop() {
    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <ShopContent/>
            <Footer/>
        </>
    );
}

export default Shop;