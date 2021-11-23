import React from 'react'
import Post from '../../components/post/Post'
import "./posts.css"

function Posts({posts}) {
    return (
        <div className="posts" >
            {posts.map((post) => (
                <Post post={post} key={post._id} />
            ))}
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
    )
}

export default Posts
