import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Cart from "./pages/Cart"
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Trainers from "./pages/Trainers";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ShopContextProvider} from "./components/shop-context";
import ShopEdit from "./pages/ShopEdit";

const router = createBrowserRouter([

    {
        path: "/",
        element: (
            <ShopContextProvider>
                <HomePage/>
            </ShopContextProvider>
        ),
    },
    {
        path: "Cart",
        element: (
            <ShopContextProvider>
                <Cart/>
            </ShopContextProvider>
        ),
    },
    {
        path: "Contact",
        element: (
            <ShopContextProvider>
            <Contact/>
            </ShopContextProvider>
        ),
    },
    {
        path: "FAQ",
        element: (
            <ShopContextProvider>
            <FAQ/>
            </ShopContextProvider>
        ),
    },
    {
        path: "Shop",
        element: (
            <ShopContextProvider>
            <Shop/>
            </ShopContextProvider>
        ),
    },
    {
        path: "Trainers",
        element: (
            <ShopContextProvider>
                <Trainers/>
            </ShopContextProvider>
        ),
    },
    {
        path: "Shop/Edit",
        element: (
            <ShopContextProvider>
                <ShopEdit/>
            </ShopContextProvider>
        ),
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
reportWebVitals();
