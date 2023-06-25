import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import CartProvider from 'providers/Cart';
import AppHeader from './components/Header';
import CartPage from 'pages/CartPage';
import StoreItemExpanded from './components/StoreItemExpanded';
import StorePage from './pages/Store';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<AppHeader />}>
            <Route path="store" element={<StorePage />} />
            <Route path="store/:id" element={<StoreItemExpanded />} />
            <Route path="cart" element={<CartPage />} />
            <Route index element={<div>Home placeholder</div>} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
