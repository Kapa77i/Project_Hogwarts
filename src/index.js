import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import './App.scss'; */

import Welcome_Hogwarts from './Welcome_Hogwarts';
import ApplicationForm from './ApplicationForm';
import Books_Equipment from './Books_Equipment';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Application from './ApplicationForm';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
        <nav id="navi">
          <Link to="/">Welcome to Hogwarts</Link>
          <Link to="/ApplicationForm">Application</Link>
          <Link to="/Books_Equipment">Books and equipments</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome_Hogwarts />}/>
          <Route exact path= "/applicationform" element={<ApplicationForm />}/>
          <Route exact path="/books_equipment" element={<App />}/>
        </Routes>

      </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
