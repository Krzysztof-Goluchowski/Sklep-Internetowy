import React from "react";
import NavHeader from "../components/NavHeader";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import ContactContent from "../components/ContactContent";
import Temporary from "../components/Temporary";
import Footer from "../components/Footer";

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