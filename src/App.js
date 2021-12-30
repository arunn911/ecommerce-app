import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home';
import ProductList from './pages/Productlist'
import Product from './pages/Product'
import Register from './pages/Register'
import Cart from './pages/Cart';
import { Success } from './pages/Success';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';




 const App = () => {
   const user = useSelector((state) => state.user.currentUser);

 
  return (
   <Router>
     <Switch>
       <Route exact path="/">
           <Home/>
       </Route>
       <Route path="/products/:category">
           <ProductList/>
       </Route>
       <Route path="/products">
           <ProductList/>
       </Route>
       <Route path="/product/:id">
           <Product/>
       </Route>
       <Route path="/cart">
           <Cart/>
       </Route>
       <Route path="/success">
           <Success/>
       </Route>
       <Route path="/login">
         {user ? <Redirect to="/" /> : <Login/>}
       </Route>
       <Route path="/Register">
       {user ? <Redirect to="/" /> : <Register/>}
       </Route>
     </Switch>
   </Router>

  )
}

export default App

