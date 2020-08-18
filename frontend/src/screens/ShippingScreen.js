import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/checkoutSteps';

function ShippingScreen(props){
   
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPcode] = useState('');
    const [phoneNumber, setPhNum] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();

    const redirect = props.location.search?props.location.search.split("=")[1]: '/';

       const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping({address, city, postalCode, phoneNumber}));
        props.history.push("payment");
    }

    return <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <div className= "form">

        <form onSubmit= {submitHandler}>
            <ul className= "form-container">
                <li>
                    <h3>
                        Where do you want the pet?
                    </h3>
                </li>
                <li>
                    <label htmlFor="Name">
                        Address:
                    </label>
                    <input 
                    type="text" 
                    name="adress" 
                    id="adress" 
                    onChange={(e) => setAddress(e.target.value)}></input>

                </li>

                <li>
                    <label htmlFor="Name">
                        City:
                    </label>
                    <input 
                    type="text" 
                    name="city" 
                    id="city" 
                    onChange={(e) => setCity(e.target.value)}></input>

                </li>
                <li>
                    <label htmlFor="Name">
                        Postal Code:
                    </label>
                    <input 
                    type="text" 
                    name="pCode" 
                    id="pCode" 
                    onChange={(e) => setPcode(e.target.value)}></input>

                </li>
                <li>
                    <label htmlFor="Name">
                        Phone Number:
                    </label>
                    <input 
                    type="text" 
                    name="pNumber" 
                    id="pNumber" 
                    onChange={(e) => setPhNum(e.target.value)}></input>

                </li>

                <li>
                    <button type= "submit" className= "button primary">Move to Checkout</button>
                </li>
            </ul>

        </form>
               
    
</div>
        
    </div>
    
   
}

export default ShippingScreen;