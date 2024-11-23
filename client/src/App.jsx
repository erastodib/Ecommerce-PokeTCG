import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';
import FusionStrike from './pages/FusionStrike';
import LostOrigin from './pages/LostOrigin';
import ChillingReign from './pages/ChillingReign';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost-origin" element={<LostOrigin />} />
        <Route path="/chilling-reign" element={<ChillingReign />} />
        <Route path="/fusion-strike" element={<FusionStrike />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/products" element={<Products />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
