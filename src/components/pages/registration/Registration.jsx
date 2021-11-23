import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./registration.css";
import axios from "axios";


function Registration() {
        const [username,setUsername] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const [error,setError] = useState();
        const handleSubmit = async (e) => {
                setError(false)
                e.preventDefault();
                try{
                    const res = await axios.post("http://localhost:5000/api/auth/register",{
                            username,
                            email,
                            password
                        });
                    // console.log(res) 
                        res.data && window.location.replace("/login")
                }catch(err){
                  setError(true)  
                }
                   
        }
    return (
        <div className="register" >
             <span className="registerTitle">Register</span>
            <form  className="registerForm" onSubmit={handleSubmit} >
                <label >Username</label>
                <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter your username"
                onChange={e => setUsername(e.target.value)}
                 />
                <label >Email</label>
                <input 
                type="email" 
                className="registerInput" 
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)} 
                />
                <label >Password</label>
                <input 
                type="password" 
                className="registerInput" 
                placeholder="Enter your password" 
                onChange={e => setPassword(e.target.value)}
                />
            <button className="registerButton" type="submit" > REGISTER </button>
            </form>
            <button className="registerLoginButton"><Link className="link" to="/login" >LOGIN</Link>  </button>       
            {error && <span style={{color: "red", marginTop: "10px"}} >Something went wrong!</span> }
        </div>
    )
}

export default Registration
        