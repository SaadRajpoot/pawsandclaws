import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';

function SigninScreen(props){
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    const redirect = props.location.search?props.location.search.split("=")[1]: '/';
    useEffect(()=> {
        if(userInfo){
            props.history.push(redirect);
        }

        return () => {
            //
        };
    },[userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className= "form">

        <form onSubmit= {submitHandler}>
            <ul className= "form-container">
                <li>
                    <h3>
                        Sign-In here
                    </h3>
                </li>
                <li>
                    {loading && <div>Loading Cuteness</div>}
                    {error && <div>Cute Error: {error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={(e) => setEmail(e.target.value)}></input>

                </li>
                <li>
                <label htmlFor="password">
                        Password
                    </label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type= "submit" className= "button primary">Get a Pet</button>
                </li>
                <li>
                    Never been at Paws and Claws?
                </li>
                <li>
                    <Link to={redirect === "/"? "register": "register?redirect="+redirect} className= "button secondary text-center">Create Paws and Claws Account</Link>
                </li>
            </ul>

        </form>
                       
            
        </div>
}

export default SigninScreen;