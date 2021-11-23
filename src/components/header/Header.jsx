import React from 'react';
import "./header.css"
import headImg from "../assets/img/headImg.jpg";

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React && Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src={headImg} alt="" className="headerImg" />
        </div>
    )
}

export default Header
