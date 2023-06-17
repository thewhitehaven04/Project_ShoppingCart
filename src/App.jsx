import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import CartContext from './context/cartContext';
import AppHeader from './components/Header';
import StorePage from './pages/Store';

function App() {
  return (
    <div className="App">
      <CartContext>
        <AppHeader />
        <BrowserRouter>
          <Routes>
            <Route path="/home"></Route>
            <Route path="/store" element={<StorePage />}></Route>
            <Route path="/cart" element={<span>Placeholder</span>}></Route>
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
