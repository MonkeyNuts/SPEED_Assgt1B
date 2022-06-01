import React, { useState } from "react";
import Home from "./pages/home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import ModeratorList from "./pages/moderator-list";
import AnalystList from "./pages/analyst-list";
import EditPage from "./pages/editPage";
import NotFoundPage from "./pages/404";
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'
import logo from "./images/SPEEDLOGO2.png";
import UserNavOptions from "./components/usernavoptions";

const App = () => {

  let [UserType, setUserType] = useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  }

  return (
    <BrowserRouter>
      <div>
        <img className="logo" src={logo} alt={"SPEED Logo"}/>

          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/SEPractice">Select the Practice</NavLink></li>
            <li><NavLink to="/SubmitArticle">Submit an Article</NavLink></li>
            <li>
              <UserNavOptions UserType={UserType}/>
            </li>
            
            <select className="userstate" onChange={handleChange}>
              <option value="">Select User state</option>
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
              <option value="analyst">Analyst</option>
            </select>
          </ul>

        <div className="content">
          <p>{UserType}</p>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
            <Route path="/SEPractice" element={<SEPractice />} />
            <Route path="/ModeratorList" element={<ModeratorList />} />
            <Route path="/AnalystList" element={<AnalystList />} />
            <Route path="/EditPage/:id" element={<EditPage />}></Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;