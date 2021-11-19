import React from 'react';
import "./write.css"

function Write() {
    return (
        <div className="write" >
            <img src="./img/headImg.jpg" alt="" className="writeImg" />
            <form  className="writeForm">
                <div className="writeFormGroup">
                    <label  htmlFor="fileInput"  >
                        <i  class=" writeIcon far fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" className="fileInput " style={{display: "none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" className="writeInput writeText" placeholder="Tell your story..." ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
