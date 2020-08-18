import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartScreen(props){

    const cart = useSelector(state => state.cart);
    const{cartItems} = cart;

    const productId = props.match.params.id;
    const dispatch = useDispatch();

    const removeFromCartHandler= (productId) =>{
        dispatch(removeFromCart(productId));
    }


    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }

    return <div className= "cart">
        <div className= "cart-list">
            <ul className= "cart-list-contianer">
                <li>
                    <h3>
                        Pet You Want
                    </h3>
                    <div>
                       
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

                            <div className= "cart=name">
                                <div>
                                    <Link to= {"/products/"+item.product}>
                                     <b>{item.name}</b>
                                   </Link>
                                </div>
                            </div>
                            
                            <div>
                                <button type="button" className="button full-width" onClick={() => removeFromCartHandler(item.product) }>
                                    Not This One
                                </button>
                            </div>
                            
                            <div className= "cart-price">
                                <div>{item.price}</div>
                            </div>
                        </li>
                    )          
                
                    }
               
                
            </ul>

        </div>
        <div className = "cart-action">
                <h3>
                    Subtotal:             
                Rs. {cartItems.reduce((a,c) => a+ c.price, 0)}
                </h3>
                <button onClick={checkoutHandler} className= "button primary full-width" disabled={cartItems.length === 0}>Take My Money</button>
        </div>
        
    </div>
}

export default CartScreen;