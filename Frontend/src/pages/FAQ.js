import React from "react";
import NavHeader from "../components/NavHeader";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AccordionFAQ from "../components/AccordionFAQ";
import 'bootstrap/dist/css/bootstrap.min.css';
import Temporary from "../components/Temporary";

function FAQ() {
    return (
        <>

            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <AccordionFAQ/>
            <Footer/>
        </>
    );
}

export default FAQ;