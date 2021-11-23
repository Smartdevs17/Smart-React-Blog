import React,{useState,useEffect} from 'react'
import "./sidebar.css"
import sidebarImg from "../assets/img/sidebarImg.jpg";
import axios from "axios";
import { Link } from "react-router-dom";


function Sidebar() {
    

    const [cat,setCat] = useState([]);
    useEffect(() => {
        const getCat = async () => {
            const res = await axios.get("http://localhost:5000/api/categories/");
                setCat(res.data)
                // console.log(res.data)
        };
        getCat()
    },[])
    return (
        <div className="sidebar" >
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={sidebarImg} alt="" className="sidebarImg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime nesciunt harum ratione quia voluptate.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {/* <li className="sidebarListItem">Life</li> */}
                   {cat.map((c) => (
                       <Link to={`/?cat=${c.name}`} className="link" >
                       <li className="sidebarListItem" key={c._id} > {c.name} </li>
                       </Link>
                   ))}
                    {/* <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Movie</li>
                    <li className="sidebarListItem">Tech</li> */}
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
