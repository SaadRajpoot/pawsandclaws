import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {detailsProduct} from '../actions/productActions';

function ProductScreen(props){
   
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading,  error} = productDetails;
    const dispatch = useDispatch();

    useEffect(()=> {

      
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    },[]);

    const handleAddToCart = () =>{
        props.history.push("/cart/" + props.match.params.id);
    }

    return <div >
            <div className= "go-back">
                <Link  to="/">Back to Home Page</Link>
            </div>
            {
                loading ? <div>Loading...</div> :error ? <div>{error}</div> :
                (
                    
                <div>
                    <div className= "details">
                            <div className= "details-image">
                                <img src={product.image} alt= "product"></img>
                            </div>
                        <div className= 'details-info'>
                            <ul>
                                <li><h1>{product.name}</h1></li>
                                <li>{product.brand}</li>
                                <li>Age: {product.numView}</li>
                                <li>
                                    <b>PKR {product.price}</b>
                                </li>
                                <li>
                                    {product.description}
                                </li>
                            </ul>
                        </div>
                        <div className= 'details-action'>
                            <ul>
                                <li>Price: <b>PKR {product.price}</b></li>
                                <li>Status: {product.status}</li>
                                <li>
                                        <button onClick= {handleAddToCart} className="button primary">
                                            Apply
                                        </button>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                )
            }
            
            
        </div>
}

export default ProductScreen;