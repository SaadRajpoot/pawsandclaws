import Cookie from "js-cookie";
import thunk from 'redux-thunk';

const { default: Axios } = require("axios");

const { CART_ADD_ITEM, CART_REMOVE_ITEM } = require("../constants/cartConstants");


const addToCart = (productId) => async (dispatch, getState) =>{

    try {
        const {data} = await Axios.get("/api/products/"+ productId);
        dispatch({type: CART_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price
        }
    });
    const {cart: {cartItems}}= getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {
        
    }
}

const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    const {cart: {cartItems}}= getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

export {addToCart, removeFromCart};