import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/checkoutSteps';

function PlaceOrderScreen(props){

    const cart = useSelector(state => state.cart);
    const{cartItems, shipping, payment} = cart;
    if(!cart.shipping.address){
        props.history.push("shipping")
    }

    // if(payment.paymentMethod){
    //     props.history.push("payment")
    // }
const itemsPrice = cartItems.reduce((a,c) => a+ c.price, 0);
const shippingPrice = itemsPrice > 100? 0: 10;
const taxPrice = 0.16* itemsPrice;
const totalPrice = itemsPrice+ shippingPrice+taxPrice;

    const dispatch = useDispatch();

  
    useEffect(()=>{
     
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }

    return <div>
<CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
    <div className= "palceorder">
        <div className= "placeorder-info">
            <div>
                <h3>
                    This is where the Cuteness will go:
                </h3>
                <div>
                        Payment Details
                    </div>
                <div>
                       {cart.shipping.address}, {cart.shipping.city}, {cart.shipping.postalCode}
                       ,{cart.shipping.phoneNumber}
                    </div>
                    </div>
                    
                    <div>
                        Payment Method: {cart.payment.paymentMethod}
                    </div>
                    <div>
                    <ul className= "cart-list-contianer">
                <li>
                    <div>
                        <h3>
                        Pet You Want
                    </h3>
                    
                        
                    </div>
                </li>
                {cartItems.length === 0?
                    <div>
                        You need a Pet.
                    </div>    
                    :
                    cartItems.map( item =>
                        <li>
                            <div className="cart-image">

                            <img src= {item.image} alt= "product"></img>
                            </div>

                            <div className= "placeorder-action">
                                <div>
                                    <Link to= {"/products/"+item.product}>
                                     <b>{item.name}</b>
                                   </Link>
                                </div>
                            </div>
                            
                                                
                            <div className= "cart-price">
                                <div>{item.price}</div>
                            </div>
                        </li>
                    )          
                
                    }
               
                
            </ul>
            </div>
            

        </div>
        <div className = "cart-action">
            <ul>
                <li>
                    <button >Get the Pet</button>
                </li>
                <li>
                    <h3>
                        This is Your Pet Now
                    </h3>
                </li>
                <li>
                    <div>
                        Items
                    </div>

                    <div>
                        Rs. {itemsPrice}
                    </div>
                </li>

                <li>
                    <div>
                        Shipping
                    </div>

                    <div>
                        Rs. {shippingPrice}
                    </div>
                </li>

                <li>
                    <div>
                        tax
                    </div>

                    <div>
                        Rs. {taxPrice}
                    </div>
                </li>

                <li>
                    <div>
                        Total
                    </div>

                    <div>
                        Rs. {totalPrice}
                    </div>
                </li>

                
            </ul>
               
                <button  className= "button primary full-width" disabled={cartItems.length === 0}>Take My Money</button>
        </div>
        
    </div>

    </div>
    
}

export default PlaceOrderScreen;