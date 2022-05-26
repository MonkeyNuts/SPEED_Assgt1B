import React from "react";

import Home from "./pages/home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import ModeratorList from "./pages/moderator-list";
import AnalystList from "./pages/analyst-list";
import NotFoundPage from "./pages/404";
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'
import logo from "./images/SPEEDLOGO2.png";

const App = () =>  {
    return (
        <BrowserRouter>
        <div>
          <img className="logo" src={logo} />
            <ul className="header">
            <li><NavLink  to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
                <li><NavLink to = "/ModeratorList">Moderator Article Queue</NavLink></li>
                <li><NavLink to = "/AnalystList">Analyst Article Queue</NavLink></li>

                <select className="userstate">
                <option value="">Select User state</option>
                <option value="tdd">Moderator</option>
                <option value="mob">Analyst</option>
                </select>
            </ul>
            
          <div className="content">
          <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/SubmitArticle" element={<SubmitArticle />}/>
            <Route path="/SEPractice" element={<SEPractice />}/>
            <Route path="/ModeratorList" element={<ModeratorList />}/>
            <Route path="/AnalystList" element={<AnalystList />}/>
            <Route path='*' element={<NotFoundPage  />} />
          </Routes>
          </div>
        </div>
        </BrowserRouter>
    );
    
}

export default App;