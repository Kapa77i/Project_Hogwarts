import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Asiakkaat from './Asiakkaat';
import Etusivu from './Etusivu';
import Yhteystiedot from './Yhteystiedot';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//En saanut sitä open esimerkkiä toimimaan, mutta alla olevalla (Verrattain samalla) räpellyksellä homma pyörii
ReactDOM.render(
  <React.StrictMode>

    <Router>
        <nav id="navi">
          <Link to="/">Etusivu</Link>
          <Link to="/asiakkaat">Asiakkaat</Link>
          {/* <Link to="/yhteystiedot" id="asiakas"></Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<Etusivu />}/>
          <Route exact path="/asiakkaat" element={<Asiakkaat />}/>
          <Route path="/asiakas/:id" element={<Yhteystiedot />}/>
        </Routes>
      </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
