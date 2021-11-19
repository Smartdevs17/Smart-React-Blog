import React from 'react'
import { Link} from 'react-router-dom'
import "./login.css"
function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form  className="loginForm">
                <label >Email</label>
                <input type="email" className="loginInput" placeholder="Enter your email" />
                <label >Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" />
            </form>
            <button className="loginButton"><Link className="link" to="/login" >LOGIN</Link> </button>
            <button className="loginRegisterButton"><Link className="link" to="/register" >REGISTER</Link> </button>
        </div>
    )
}

export default Login
