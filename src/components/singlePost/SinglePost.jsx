import React from 'react'
import "./singlePost.css";


function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="./img/singlePostImg.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Smart Developer</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed molestias fuga quia dolorem. Eius libero id molestiae in nesciunt fugiat quia nisi voluptatibus sequi ipsum, repellendus assumenda expedita placeat accusamus tenetur consequatur distinctio fugit, corporis, aperiam incidunt ab sapiente unde dolor. Fugit eveniet repellendus dignissimos enim magnam deserunt nesciunt dolorum, a animi quibusdam soluta commodi officiis pariatur corrupti omnis aliquid, ea provident assumenda libero quisquam, odio sed? Quas rerum, hic quos facilis eligendi nulla officia minima amet odio aspernatur nesciunt porro commodi recusandae doloremque in autem, inventore iste voluptatibus magni. Eligendi aut distinctio at ab fugit, necessitatibus impedit iure iste voluptate rerum molestias harum saepe sed omnis eum. Possimus dignissimos maxime mollitia quis, nesciunt sequi laborum voluptatibus alias modi, eos porro ad blanditiis. Dolorem vero quia quod atque delectus reiciendis tempora minus neque magni quo, necessitatibus rerum, itaque sint labore quis culpa voluptatem. Mollitia aspernatur qui ipsa, odio optio, iure possimus veniam ullam rem harum magnam asperiores id accusamus minus nesciunt, vel reiciendis velit adipisci quidem repellat facere amet laudantium! Cumque fuga magnam dolores vero delectus quasi repellendus id soluta perferendis ipsa vel architecto aspernatur minus, velit porro esse! Laudantium ipsum ut reprehenderit, veniam assumenda incidunt necessitatibus quis debitis accusamus quaerat ullam, itaque quidem repudiandae corporis totam nihil minus, recusandae ipsa architecto doloribus cupiditate error vero enim fugit! Quidem veritatis natus labore quaerat. Asperiores voluptas quos delectus neque nesciunt! Neque obcaecati voluptatum consequuntur praesentium saepe cumque odit temporibus vel voluptatem ipsam consectetur ex ipsum aliquid reiciendis dolorum, dolore itaque.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
