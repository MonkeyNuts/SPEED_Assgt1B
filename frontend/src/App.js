import React from "react";

import Home from "./pages/home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'
const App = () =>  {
    return (
        <BrowserRouter>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED) </h1>
            <ul className="header">
            <li><NavLink  to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
            </ul>
            
          <div className="content">
          <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route  path="/SEPractice" element={<SEPractice />}/>
            <Route  path="/SubmitArticle" element={<SubmitArticle />}/>
            <Route path='*' element={<NotFoundPage  />} />
          </Routes>
          </div>
        </div>
        </BrowserRouter>
    );
}
 
export default App;