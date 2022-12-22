import React from 'react'
import "./login.css"

function Login() {
    return (
        <div className='login'>
            <div className="login_logo">
                <h2 className='f_name'>facebook</h2>
                <h5>Connect with friends and the world around you on Facebook.</h5>
            </div>
            <div className="login_form">
                <input type="text" name="" id="" placeholder='Email or phone number' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
                <span>Forgot Password</span>
                <hr />
                <a href="#" className="btn-success">Create new account</a>
            </div>
        </div>
    )
}

export default Login