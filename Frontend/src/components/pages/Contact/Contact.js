import React from "react";
import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import ContactContent from "./ContactContent";
import Temporary from "../../layout/Temporary";
import Footer from "../../layout/Footer";

function Contact() {
    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <ContactContent/>
            <Footer/>
        </>
    );
}

export default Contact;