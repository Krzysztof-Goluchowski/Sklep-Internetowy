import React from "react";
import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import Footer from "../../layout/Footer";
import AccordionFAQ from "./AccordionFAQ";
import 'bootstrap/dist/css/bootstrap.min.css';
import Temporary from "../../layout/Temporary";

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