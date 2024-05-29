import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../layout/header/Logo";
import NavBar from "../../layout/header/NavBar";
import NavHeader from "../../layout/header/NavHeader";
import Temporary from "../../layout/Temporary";

function AnnualReport() {
    const [reportData, setReportData] = useState(Array(12).fill(0));
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    const previousYear = new Date().getFullYear() - 1;
    const [currentYearSalesData, setCurrentYearSalesData] = useState(Array(new Date().getMonth() + 1).fill(0));


    useEffect(() => {
        axios.get('http://localhost:8080/orders/monthly-report')
            .then(response => {
                const data = Array(12).fill(0);
                response.data.forEach(item => {
                    const monthIndex = item[0] - 1;
                    data[monthIndex] = item[1];
                });
                setReportData(data);
            })
            .catch(error => {
                console.error("Error fetching annual report data:", error);
                setReportData(Array(12).fill(0));
            });

        axios.get('http://localhost:8080/orders/current-year-sales')
            .then(response => {
                const data = Array(new Date().getMonth() + 1).fill(0);
                response.data.forEach(item => {
                    const monthIndex = item[0] - 1;
                    data[monthIndex] = item[1];
                });
                setCurrentYearSalesData(data);
            })
            .catch(error => {
                console.error("Error fetching current year sales data:", error);
                setCurrentYearSalesData(Array(new Date().getMonth() + 1).fill(0));
            });
    }, []);


    return (
        <>
            <NavHeader>
                <Logo />
                <NavBar />
            </NavHeader>
            <Temporary />
            <div className="report-container">
                <h1>Annual Sales Report - Sales in {previousYear}</h1>
                {reportData.length > 0 ? (
                    <ul>
                        {reportData.map((total, index) => (
                            <li key={index}>
                                Month: {months[index]}, Total Sales: ${total.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No data available for the report.</p>
                )}
                <h1>Sales to Now - Sales in {new Date().getFullYear()}</h1>
                {currentYearSalesData.length > 0 ? (
                    <ul>
                        {currentYearSalesData.map((total, index) => (
                            <li key={index}>
                                Month: {months[index]}, Total Sales: ${total.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No data available for current year sales.</p>
                )}
            </div>

        </>
    );
}

export default AnnualReport;