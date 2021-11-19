import React from 'react'
import { Link } from 'react-router-dom'
import "./registration.css"
function Registration() {
    return (
        <div className="register" >
             <span className="registerTitle">Register</span>
            <form  className="registerForm">
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username" />
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email" />
                <label >Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />
            </form>
            <button className="registerButton"><Link className="link" to="/register" >REGISTER</Link> </button>
            <button className="registerLoginButton"><Link className="link" to="/login" >LOGIN</Link>  </button>       
        </div>
    )
}

export default Registration
        