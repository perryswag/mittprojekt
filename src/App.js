import React from 'react';

import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Home from "./pages/Home";
import Om from "./pages/Om";
import Aktiviteter from "./pages/Aktiviteter";
import Hitta from './pages/Hitta';
import Kontakt from './pages/Kontakt';
import ErrorPage from "./pages/ErrorPage";

import LikeButton from './LikeButton';

import "./App.css";

function App() {
  return (

    <Router> 

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/om" element={<Om />} />
        <Route path="/aktiviteter" element={<Aktiviteter />} />
        <Route path="/Hitta" element={<Hitta />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="*" element={<ErrorPage />} /> 
        
      </Routes>

      <div class = "gillat"> 
        <p >Visa hur mycket du gillar alla hästar på Håknäs genom att ge dom några gnägg!! </p>
        <LikeButton />
      </div>

    </Router>

  ); 
}

export default App;