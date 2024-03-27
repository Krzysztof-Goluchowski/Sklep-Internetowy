import React from "react";
import '../App.css';
import NavHeader from "../components/NavHeader";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Temporary from "../components/Temporary";
import ImageSlider from "../components/ImageSlider";
import SecondBlockHomePage from "../components/SecondBlockHomePage";
import NiceBackgroudImage from "../components/NiceBackgroudImage";
import ThirdBlockHomePage from "../components/ThirdBlockHomePage";
import Footer from "../components/Footer";

import image_1 from "../photos/image-1.jpg";
import image_2 from "../photos/image-2.jpg";
import image_3 from "../photos/image-3.jpg";
import image_4 from "../photos/image-4.jpg";
import image_5 from "../photos/image-5.jpg";

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