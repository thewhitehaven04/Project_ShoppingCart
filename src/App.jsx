import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import CartContext from './context/cartContext';
import AppHeader from './components/Header';
import StorePage from './pages/Store';
import CartPage from 'pages/CartPage';

function App() {
  return (
    <div className="App">
      <CartContext>
        <Routes>
          <Route path="/" element={<AppHeader />}>
            <Route path="store" element={<StorePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route index element={<div>Home placeholder</div>}/>
          </Route>
        </Routes>
      </CartContext>
    </div>
  );
}

export default App;
