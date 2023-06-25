import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import CartProvider from 'providers/Cart';
import AppHeader from './components/Header';
import CartPage from 'pages/CartPage';
import StoreItemExpanded from './components/StoreItemExpanded';
import StoreContextProvider from './pages/Store';
import Store from 'components/Store';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<AppHeader />}>
            <Route path="store" element={<StoreContextProvider/>}>
              <Route index element={<Store/>}/>
              <Route path=":id" element={<StoreItemExpanded />} />
            </Route>
            <Route path="cart" element={<CartPage />} />
            <Route index element={<div>Home placeholder</div>} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
