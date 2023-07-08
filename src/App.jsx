import './App.css';
import React from 'react';
import CartProvider from 'providers/Cart';
import router from 'components/Router';
import { RouterProvider } from 'react-router-dom';

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
