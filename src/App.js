import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home2 from "./pages/home2";

import Home from "./pages/Home";
import Om from "./pages/Om";
import Aktiviteter from "./pages/Aktiviteter";

import About2 from "./pages/About2";
import Profile2 from "./pages/Profile2";
import ErrorPage from "./pages/ErrorPage";
import GridContainer from "./pages/GridContainer";

import Header from "./components/Header1";
import Menu from "./components/Meny1";
import Ikon from "./components/Ikon";


function App() {
  
  return (
    <Router> 

      <nav> 
        <Link to="/"> Home </Link>
        <Link to="/om"> Om </Link>
        <Link to="/Aktiviteter"> Aktiviteter </Link>

      </nav>

      {/* <Header />
      <Ikon />
      <Menu /> */}

      <Routes> 

        <Route path="/" element={<Home />} />
        <Route path="/om" element={<Om />} />
        <Route path="/aktiviteter" element={<Aktiviteter />} />

        <Route path="*" element={<ErrorPage />} /> 
        
      </Routes>

      

    </Router>

  ); 
}

export default App;
