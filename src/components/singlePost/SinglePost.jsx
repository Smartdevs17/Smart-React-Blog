import React,{useEffect,useState,useContext} from 'react'
import "./singlePost.css";
// import singlePostImg from "../assets/img/singlePostImg.jpg";
import { useLocation } from "react-router"
import axios from "axios";
import {Link} from "react-router-dom";
import {Context} from "../../context/Context";

function SinglePost() {
    const loc = useLocation();
    const path = loc.pathname.split("/")[2];
    const [post,setPost] = useState([]);
    const {user} = useContext(Context);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [updateMode,setUpdateMode] = useState(false);



    useEffect(() => {
      const getPost = async () => {
          const res = await axios.get("http://localhost:5000/api/posts/" + path)
                setPost(res.data)
        };
      getPost()
    }, [path])
        const PF = "http://localhost:5000/images/";

        const handleDelete = async () => {
                        try {
                            await axios.delete("http://localhost:5000/api/posts/"+ path ,{
                                data: {username: user.username} } );
                            window.location.replace("/");
                        } catch (error) {
                            console.log(error)
                        }
        }
    return (

        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                        <img src={PF + post.photo} alt="" className="singlePostImg"/>
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user?.username && 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)} ></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete} ></i>
                    </div>
                    }
                    
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: 
                    <Link className="link" to={`/?user=${post.username}`} > 
                            <b>{post.username}</b>
                    </Link>
                    </ span>
                    <span className="singlePostDate"> {new Date(post.createdAt).toDateString()} </span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost
