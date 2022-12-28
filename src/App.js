import React from 'react';
import Home from './Components/Home/index.js';
import LoginPage from './Components/Login/index.js';
import { BrowserRouter, Routes, Route,Switch,useParams} from "react-router-dom";
import Names from './Components/Names/index.js.js';
import NavBar from './Components/NavBar/index.js.js';
import ResponsiveAppBar from './Components/NavBar/index.js.js';
import OneData from './Components/Names/OneData.js';
import "./Home.css"



function App() {
  let { id } = useParams();
  return (
    <div className="my-app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/names" element={<Names />} />
          <Route path="/names/:id" element={<Names />} />
          {/* <Route path="/getUser/:id" element={<OneData />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  )
}
export default App;

