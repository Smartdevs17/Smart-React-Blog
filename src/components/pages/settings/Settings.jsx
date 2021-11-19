import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"

function Settings() {
    return (
        <div className="settings" >
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form  className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src="./img/My-pic.jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="Smartdev" />
                    <label >Email</label>
                    <input type="email" placeholder="smartdev@gmail.com" />   
                    <label >Password</label>
                    <input type="password"  />
                    <buton className="settingsSubmit">Update</buton>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
