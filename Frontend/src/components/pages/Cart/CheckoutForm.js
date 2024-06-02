import React, {useState} from "react";
import axios from "axios";
import NavHeader from "../../layout/header/NavHeader";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import Temporary from "../../layout/Temporary";
import Footer from "../../layout/Footer";

function CheckoutForm() {
    const [shipCity, setShipCity] = useState('');
    const [shipPostalCode, setShipPostalCode] = useState('');
    const [shipAddress, setShipAddress] = useState('');
    const [customersPhone, setCustomersPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:8080/orders/place', {
                orderDate: new Date(),
                shipCity: shipCity,
                shipPostalCode: shipPostalCode,
                shipAddress: shipAddress,
                customersPhone: customersPhone,
                customerId: localStorage.getItem('loggedUserId')
            });
            alert(response.data);
        } catch (error) {
            alert(error.response.data);
        }
    }

    return (
        <>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <div className="loginSpace">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" placeholder="Miasto" required
                                   onChange={(e) => setShipCity(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Kod pocztowy" required
                                   onChange={(e) => setShipPostalCode(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Adres" required
                                   onChange={(e) => setShipAddress(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Telefon" required
                                   onChange={(e) => setCustomersPhone(e.target.value)}/>
                        </div>

                        <button type="submit">Order!</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CheckoutForm;