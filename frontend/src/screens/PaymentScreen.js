import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/checkoutSteps';

function PaymentScreen(props){
   
    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment(paymentMethod));
        props.history.push("placeorder");
    }

    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className= "form">

        <form onSubmit= {submitHandler}>
            <ul className= "form-container">
                <li>
                    <h3>
                        How will you like to Pay?
                    </h3>
                </li>

                <li>
                    <div>
                        <input 
                        type="Radio" 
                        name="paymentMehtod" 
                        id="paymentMethod" 
                        value="Paypal"
                        onChange={(e) => setPaymentMethod(e.target.value)}></input>
                        
                        <label htmlFor="Name">
                            Paypal
                        </label>
                    </div>
                
                </li>

                     

                <li>
                    <button type= "submit" className= "button primary">Take the Money</button>
                </li>
            </ul>

        </form>
               
    
</div>
        
    </div>
    
   
}

export default PaymentScreen;