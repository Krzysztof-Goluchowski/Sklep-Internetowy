import React, {useEffect, useState} from "react";
import '../../assets/styles/App.css';
import NavHeader from "../layout/header/NavHeader";
import Logo from "../layout/header/Logo";
import NavBar from "../layout/header/NavBar";
import Temporary from "../layout/Temporary";
import ImageSlider from "../layout/ImageSlider";
import SecondBlockHomePage from "../layout/SecondBlockHomePage";
import NiceBackgroudImage from "../layout/NiceBackgroudImage";
import ThirdBlockHomePage from "../layout/ThirdBlockHomePage";
import Footer from "../layout/Footer";

import image_1 from "../../assets/images/image-1.jpg";
import image_2 from "../../assets/images/image-2.jpg";
import image_3 from "../../assets/images/image-3.jpg";
import image_4 from "../../assets/images/image-4.jpg";
import image_5 from "../../assets/images/image-5.jpg";

function HomePage() {
    const slides = [
        {url: image_1, title: "runing man"},
        {url: image_2, title: "dead lift"},
        {url: image_3, title: "dead lift girl xD"},
        {url: image_4, title: "man with ropes"},
        {url: image_5, title: "our nice receptionists"},
    ];

    const containerStyles = {
        width: "100vw",
        height: "90vh",
        margin: "0 auto",
        paddingRight: "15px",
    }
    return (
        <div>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <div style={containerStyles}>
                <ImageSlider slides={slides}/>
            </div>
            <SecondBlockHomePage/>
            <NiceBackgroudImage/>
            <ThirdBlockHomePage/>
            <Footer/>
        </div>
    );
}

export default HomePage;