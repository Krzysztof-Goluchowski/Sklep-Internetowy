import React from "react";
import {Link} from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import {ShopContextProvider} from "./shop-context";
function NavBar() {
    return (
        <>
            <div className="navButtons">

                    <ul className="nav nav-tabs">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Shop">Shop</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Trainers">Trainers</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/FAQ">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Cart"><ShoppingCart size={30}/> </Link>
                        </li>

                    </ul>

            </div>
        </>
    );
}

export default NavBar;