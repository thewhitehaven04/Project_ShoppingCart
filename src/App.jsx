import './App.css';
import React from 'react';
import router from './components/Router';
import { RouterProvider } from 'react-router-dom';
import CartProvider from './providers/Cart';

const App = () => (
  <div className="App">
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </div>
);

export default App;
