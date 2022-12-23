import React, { useState } from 'react'
import "./login.css"
import { auth } from '../firebase';
import { useStateValue } from "../StatePrivider"
import { actionTypes } from "../reducer"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((res) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user,
                })
            }).catch(err => {
                alert(err.message)
            })
    }

    // const signIn = () => {
    //     auth
    //         .signInWithPopup(provider)
    //         .then((result) => {
    //             console.log(result);
    //         })
    //         .catch((error) => alert(error.message));
    // }
    return (
        <div className='login'>
            <div className="login_logo">
                <h2 className='f_name'>facebook</h2>
                <h5>Connect with friends and the world around you on Facebook.</h5>
            </div>
            <div className="login_form">
                <input type="text" name="" id="" placeholder='Email or phone number' />
                <input type="password" placeholder='Password' />
                <button type='submit' onClick={signIn}>Log In</button>
                <span>Forgot Password</span>
                <hr />
                <a href="#" className="btn-success">Create new account</a>
            </div>
        </div>
    )
}

export default Login