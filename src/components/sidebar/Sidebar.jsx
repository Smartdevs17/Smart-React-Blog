import React from 'react'
import "./sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar" >
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="../img/sidebarImg.jpg" alt="" className="sidebarImg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime nesciunt harum ratione quia voluptate.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Movie</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebaTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="topIcon fab fa-facebook-square"> </i>
                <i className="topIcon fab fa-pinterest-square"> </i>
                <i className="topIcon fab fa-twitter-square"> </i>
                <i className="topIcon fab fa-whatsapp-square"> </i>
                <i className="topIcon fab fa-telegram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
