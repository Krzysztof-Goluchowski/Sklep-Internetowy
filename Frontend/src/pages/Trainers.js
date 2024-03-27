import React from "react";
import NavHeader from "../components/NavHeader";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TrainersContent from "../components/TrainersContent";
import Temporary from "../components/Temporary";

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