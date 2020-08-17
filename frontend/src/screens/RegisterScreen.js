import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props){
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();

    useEffect(()=> {
        if(userInfo){
            props.history.push("/");
        }

        return () => {
            //
        };
    },[userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }

    return <div className= "form">

        <form onSubmit= {submitHandler}>
            <ul className= "form-container">
                <li>
                    <h3>
                        Create New Account
                    </h3>
                </li>
                <li>
                    {loading && <div>Loading Cuteness</div>}
                    {error && <div>Cute Error: {error}</div>}
                </li>
                <li>
                    <label htmlFor="Name">
                        Name:
                    </label>
                    <input 
                    type="name" 
                    name="name" 
                    id="name" 
                    onChange={(e) => setName(e.target.value)}></input>

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
                <label htmlFor="repassword">
                        Re-Enter Password
                    </label>
                    <input 
                    type="password" 
                    name="repassword" 
                    id="repassword" 
                    onChange={(e) => setRePassword(e.target.value)}></input>
                </li>
                <li>
                    <button type= "submit" className= "button primary">Show me Some Paws</button>
                </li>
                <li>
                    Been here before?
                </li>
                <li>
                    <Link to='/signin' className= "button secondary text-center">Sign-In to your Account</Link>
                </li>
            </ul>

        </form>
                       
            
        </div>
}

export default RegisterScreen;