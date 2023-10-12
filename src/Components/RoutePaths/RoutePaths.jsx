// import logo from './logo.svg';
// import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Products from '../Products/Products';
import ProductDescription from '../PorductDescription/ProductDescription';

function RoutePaths() {
  return (
    <div className="App">
      <NavLink to={'/products'} >Products</NavLink>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDescription />} />
      </Routes>
    </div>
  );
}

export default RoutePaths;
