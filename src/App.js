import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home';
import ProductList from './pages/Productlist'
import Product from './pages/Product'
import Register from './pages/Register'
import Cart from './pages/Cart';


 const App = () => {
  return (
    <div>
     <Home/>
     <ProductList/>
     <Product/>
     <Register/>
      <Login/>
      <Cart/>
    </div>
  )
}

export default App

