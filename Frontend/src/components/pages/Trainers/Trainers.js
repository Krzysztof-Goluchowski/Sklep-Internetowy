import React from "react";
import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import Footer from "../../layout/Footer";
import TrainersContent from "./TrainersContent";
import Temporary from "../../layout/Temporary";

function Trainers() {
    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <TrainersContent/>
            <Footer/>
        </>
    );
}

export default Trainers;