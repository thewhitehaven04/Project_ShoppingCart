import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import StoreItem from './components/StoreItem';

function App() {
  return (
    <div className="App">
      <header>
        <span>Header placeholder</span>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/home"></Route>
          <Route path="/store"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
