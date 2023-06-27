import './App.css';
import React from 'react';
import CartProvider from 'providers/Cart';
import { RouterProvider } from 'react-router-dom';
import router from 'components/Router';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
}

export default App;
