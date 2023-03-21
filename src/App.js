
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Home from "./pages/Home";
import Om from "./pages/Om";
import Aktiviteter from "./pages/Aktiviteter";
import Hitta from './pages/Hitta';
import Kontakt from './pages/Kontakt';
// import Form from './Form';
import Like from './components/Like';

import ErrorPage from "./pages/ErrorPage";

import "./App.css";

// import Recaptcha from 'react-recaptcha';



function App() {
  
  return (

   

    <Router> 

    



    
      <Routes> 

      {/* <Route path="form" element={<Form />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/om" element={<Om />} />
        <Route path="/aktiviteter" element={<Aktiviteter />} />
        <Route path="/Hitta" element={<Hitta />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Like" element={<Like />} />

        <Route path="*" element={<ErrorPage />} /> 
        
      </Routes>

      

    </Router>

  ); 
}

export default App;
