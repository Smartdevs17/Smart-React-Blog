import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import './topBar.css'
import profileImg from "../assets/img/My-pic.jpg" ;
import {Context} from "../../context/Context";

function TopBar() {

  const {user,dispatch} = useContext(Context);
  const handleLogout = () => {
            dispatch({type: "LOGOUT"})
  }
    return (
        <div className="top" >
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"> </i>
                <i className="topIcon fab fa-pinterest-square"> </i>
                <i className="topIcon fab fa-twitter-square"> </i>
                <i className="topIcon fab fa-whatsapp-square"> </i>
                <i className="topIcon fab fa-telegram-square"></i>

            </div>
            <div className="topCenter">
                <ul className="topList" >
                    <li className="topListItem" ><Link className="link" to="/" >Home</Link></li>
                    <li className="topListItem" ><Link className="link" to="/" >ABOUT</Link></li>
                    <li className="topListItem" ><Link className="link" to="/" >CONTACT</Link></li>
                    <li className="topListItem" ><Link className="link" to="/write" >WRITE</Link></li>
                    {/* <li className="topListItem" ><Link className="link" to="/" >LOGOUT</Link></li> */}
                    <li className="topListItem" onClick={handleLogout} > {user && "LOGOUT"} </li>
                </ul>
            </div>
            <div className="topRight">
             {user ? ( <img src={profileImg} alt="" className="topImg" />
               ) 
            : 
            (
            <>  
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login" >LOGIN</Link> 
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register" >REGISTER</Link> 
                    </li>
                </ul>

            </>
            )}
            <i className="topSearch fab fa-search" > </i>
            </div>
        </div>            

    )
}

export default TopBar
