import React, {useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props){

    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;

    const dispatch = useDispatch();

    useEffect(()=> {

        dispatch(listProducts());
        return () => {
            //
        };

    },[])

    return  loading ? <div>Loading...</div> :error ? <div>{error}</div> :<ul className="products">
    {
        products.map(product =>
          <li key= {product._id}>
          <div className="product">
              <Link to={'products/' + product._id}>
               <img  className= "product-image" src={product.image} alt="Product"></img>
              </Link>
                  
              <div className="product-name">
                  <Link to={'/products/' + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">PKR{product.price}</div>
              <div className="description">{product.description}</div>
              <div className="views">Views: {product.numView}</div>
          </div>
      </li>
 
      )
    }  

  </ul>
}

export default HomeScreen;