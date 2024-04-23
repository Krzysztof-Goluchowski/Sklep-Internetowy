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
    const [employeeName, setEmployeeName] = useState("");

    useEffect(() => {
        fetchEmployeeName();
    }, []);

    const fetchEmployeeName = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/employees/2'); // Endpoint API do pobrania danych pracownika o id = 2
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEmployeeName(data.firstName);
        } catch (error) {
            console.error('Error fetching employee data:', error);
        }
    };

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
            <p>Employee name: {employeeName}</p>
            <Footer/>
        </div>
    );
}

export default HomePage;