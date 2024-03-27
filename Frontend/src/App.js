import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Cart from './components/pages/Cart/Cart';
import Contact from './components/pages/Contact/Contact';
import FAQ from './components/pages/FAQ/FAQ';
import HomePage from './components/pages/HomePage';
import Shop from './components/pages/Shop/Shop';
import Trainers from './components/pages/Trainers/Trainers';
import ShopEdit from './components/pages/Shop/ShopEdit';
import { ShopContextProvider } from './components/pages/Shop/shop-context';

function App() {
    return (
        <ShopContextProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="cart" element={<Cart />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="shop" element={<Shop />} />
                <Route path="trainers" element={<Trainers />} />
                <Route path="shop/edit" element={<ShopEdit />} />
            </Routes>
        </ShopContextProvider>
    );
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
export default App;