import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Products from './Components/Products/Products';
import RoutePaths from './Components/RoutePaths/RoutePaths';

function App() {
  return (
    <div className="App">
      <RoutePaths />
      {/* <NavLink to={'/products'} >Products</NavLink> */}
    </div>
  );
}

export default App;
