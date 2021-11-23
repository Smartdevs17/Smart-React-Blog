import React from 'react'
import "./post.css"
// import postImg from "../assets/img/postImg.jpg"
import {Link} from "react-router-dom";
function Post({post}) {

    const PF = "http://localhost:5000/images/"
    return (
        <div className="post">
            {post.photo && (      
                <img src={PF + post.photo} alt="" className="postImg" />
                )}
            <div className="postInfo">
                <div className="postCats">
                    { post.categories.map((cat) => (
                        <span className="postCat">{cat.name}</span>
                    ))}
                   {/* <span className="postCat">Life</span> */}
                </div>
                <Link className="link" to={`/post/${post._id}`} key={post._id} ><span className="postTitle">{post.title}</span></Link>
                <hr />
                <span className="postDate">{ new Date(post.createdAt).toDateString() }</span>
            </div>
            <p className="postDesc">
               {post.desc}
            </p>
        </div>
    )
}

export default Post
