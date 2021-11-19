import React from 'react'
import "./post.css"


function Post() {
    return (
        <div className="post">
            <img src="../img/postImg.jpg" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                   <span className="postCat">Music</span>
                   <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur aperiam earum illum ab perferendis autem 
                sunt facere animi harum quas! Vel facilis voluptatibus dolorum 
                accusantium sunt modi sapiente numquam suscipit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur aperiam earum illum ab perferendis autem 
                sunt facere animi harum quas! Vel facilis voluptatibus dolorum 
                accusantium sunt modi sapiente numquam suscipit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur aperiam earum illum ab perferendis autem 
                sunt facere animi harum quas! Vel facilis voluptatibus dolorum 
                accusantium sunt modi sapiente numquam suscipit.
            </p>
        </div>
    )
}

export default Post
