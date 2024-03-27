import React from "react";
import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import Footer from "../../layout/Footer";
import ShopContent from "./ShopContent";
import Temporary from "../../layout/Temporary";
import ShopEditContent from "./ShopEditContent";

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