import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {
const userSignin = useSelector(state=> state.userSignin);
const {userInfo} = userSignin;

const openMenu = () =>{
  document.querySelector(".sidebar").classList.add("open");
}

const closeMenu = () =>{
  document.querySelector(".sidebar").classList.remove("open");
}
  return (
  
    <BrowserRouter>

    <div className= "grid-contianer">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/" > Paws and Claws</Link>
            </div>

            <div className="header-links">
                <Link to="/cart">Cart</Link>
                {
                    userInfo? <Link to="/profile">{userInfo.name}</Link>: <Link to="/signin">Sign In</Link>
                }
 
               
            </div>
       
        </header>
        <aside className="sidebar">
            <h3>Pet Categories</h3>
            <button className= "sidebar-close-button" onClick={closeMenu}>
                X
            </button>
            <ul>
                <li>Cats</li>
                <li>Dogs</li>
            </ul>
        </aside>
    <main className="main">
        <div className="content">
          <Route path="/products/:id" component= {ProductScreen}/>
          <Route path="/cart/:id?" component= {CartScreen}/>
          <Route path="/signin" component= {SigninScreen}/>
          <Route path="/register" component= {RegisterScreen}/>
          <Route path="/shipping" component= {ShippingScreen}/>
          <Route path="/payment" component= {PaymentScreen}/>
          <Route path="/placeorder" component= {PlaceOrderScreen}/>
          <Route path="/" exact= {true} component = {HomeScreen}/>
          
          <Route path="/products" exact= {true} component = {ProductsScreen}/>


         
        </div>

      
    </main>

    <footer className="footer">
    <div>
            <p>Made with ❤️ by Saad Rajpoot</p>
        </div>
    </footer>
</div>
</BrowserRouter>

  );
}

export default App;
