import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/Home'} element={<Home />} />
        <Route path={"/Dashboard"} element={<Dashboard />} />
        <Route path={'/Settings'} element={<Settings />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
