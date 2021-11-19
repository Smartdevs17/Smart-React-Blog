import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './components/pages/home/Home';
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Registration from "./components/pages/registration/Registration";


function App() {
  const user = false;

  return (
    <Router >
      <div className="App">
      <TopBar />
      <Routes>
        <Route exact  path="/" element={<Home />} >
        </Route>
         <Route path="/register" element={user ? <Home/> : <Registration/>} >
            {/* {user ? <Home/> : <Registration/>} */}
        </Route>
         <Route path="/login" element={user ? <Home /> : <Login />} >
          {/* <Login/> */}
        </Route>
         <Route path="/post/:postId" element={<Single />} >
          {/* <Single/> */}
        </Route>
         <Route path="/write" element={user ? <Write/> : <Registration /> } >
          {/* <Write/> */}
        </Route>
         <Route path="/settings" element={user ? <Settings/> : <Registration /> } >
          {/* <Settings/> */}
        </Route>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
