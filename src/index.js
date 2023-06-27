import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import initializeItems from 'init';

const root = ReactDOM.createRoot(document.getElementById('root'));
initializeItems();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
