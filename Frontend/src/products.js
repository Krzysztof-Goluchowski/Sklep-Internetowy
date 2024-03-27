import product1 from "./photos/Whey1.jpg";
import product2 from "./photos/whey2.webp";
import product3 from "./photos/whey3.png";
import product4 from "./photos/dopalacz.webp";

export const PRODUCTS = [
    {
        id: 1,
        productName: "Białko dla byków",
        initialPrice: 20.99,
        price: 20.99,
        productImage: product1,
        category: "Białko"
    },
    {
        id: 2,
        productName: "Białko dla profesjonalistów",
        initialPrice: 40.99,
        price: 40.99,
        productImage: product2,
        category: "Białko"
    },
    {
        id: 3,
        productName: "Białko dla studentów",
        initialPrice: 10.99,
        price: 10.99,
        productImage: product3,
        category: "Białko"
    },
    {
        id: 4,
        productName: "Dopalacz z Indii",
        initialPrice: 99.99,
        price: 99.99,
        productImage: product4,
        category: "Dopalacze"
    },
]