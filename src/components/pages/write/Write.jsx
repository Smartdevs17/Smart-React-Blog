import React,{useState,useContext} from 'react';
import "./write.css"
// import headImg from "../../assets/img/headImg.jpg";
import axios from "axios";
import {Context} from "../../../context/Context";

function Write() {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const { user } = useContext(Context)

        const handleSubmit = async (e) => {
            e.preventDefault();
         const newPost = {
             username: user.username,
             title,
             desc
            };
            if(file){
                const data = new FormData();
                const filename = Date.now() + file.name;
                data.append("name",filename);
                data.append("file",file);
                newPost.photo = filename;

                try {
                    await axios.post("http://localhost:5000/api/upload",data)
                } catch (error) {
                    console.log(error)
                }
            };
            try {
                const res = await axios.post("http://localhost:5000/api/posts/",newPost);
                // console.log(res.data)
                window.location.replace("/post/" + res.data._id)
            } catch (error) {
                console.log(error)
            }
        }
    return (
        <div className="write" >

            {file && 
                        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
            }
            <form  className="writeForm" onSubmit={handleSubmit} >
                <div className="writeFormGroup">
                    <label  htmlFor="fileInput"  >
                        <i  className=" writeIcon far fa-plus"></i>
                    </label>
                    <input 
                    type="file" 
                    id="fileInput" 
                    className="fileInput " 
                    style={{display: "none"}}
                    onChange ={(e) => setFile(e.target.files[0] )}
                     />
                    <input 
                    type="text" 
                    placeholder="Title" 
                    className="writeInput" 
                    autoFocus={true} 
                    onChange= {(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    type="text" 
                    className="writeInput writeText" 
                    placeholder="Tell your story..." 
                    onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit" >Publish</button>
            </form>
        </div>
    )
}

export default Write
