import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Asiakkaat from './Asiakkaat';
import Welcome_Hogwarts from './Welcome_Hogwarts';
import Yhteystiedot from './Yhteystiedot';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//En saanut sitä open esimerkkiä toimimaan, mutta alla olevalla (Verrattain samalla) räpellyksellä homma pyörii
ReactDOM.render(
  <React.StrictMode>

    <Router>
        <nav id="navi">
          <Link to="/">Welcome to Hogwarts</Link>
          <Link to="/asiakkaat">Books and equipments</Link>
          {/* <Link to="/yhteystiedot" id="asiakas"></Link> */}
        </nav>

        

        <Routes>
          <Route path="/" element={<Welcome_Hogwarts />}/>
          <Route exact path="/asiakkaat" element={<App />}/>
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
