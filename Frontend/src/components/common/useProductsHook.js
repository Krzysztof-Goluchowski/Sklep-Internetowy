import product1 from "../../assets/images/Whey1.jpg";
import product2 from "../../assets/images/whey2.webp";
import product3 from "../../assets/images/whey3.png";
import product4 from "../../assets/images/dopalacz.webp";
import {useEffect, useState} from "react";
import axios from "axios";

const useProductsHook = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products/all")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }, []);

    return products;
};

export default useProductsHook;