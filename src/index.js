import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import './App.scss'; */

//import Asiakkaat from './Asiakkaat';
import Welcome_Hogwarts from './Welcome_Hogwarts';
import Yhteystiedot from './Yhteystiedot';
import ApplicationForm from './ApplicationForm';
import Books_Equipment from './Books_Equipment';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Application from './ApplicationForm';

//En saanut sitä open esimerkkiä toimimaan, mutta alla olevalla (Verrattain samalla) räpellyksellä homma pyörii
createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
        <nav id="navi">
          <Link to="/">Welcome to Hogwarts</Link>
          <Link to="/ApplicationForm">Application</Link>
          <Link to="/Books_Equipment">Books and equipments</Link>
          
          {/* <Link to="/yhteystiedot" id="asiakas"></Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<Welcome_Hogwarts />}/>
          <Route exact path= "/applicationform" element={<ApplicationForm />}/>
          <Route exact path="/books_equipment" element={<App />}/>
          <Route path="/wizards/:id" element={<Yhteystiedot />}/>
        </Routes>

      </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
