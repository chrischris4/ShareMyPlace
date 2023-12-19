import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import './i18n';

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
reportWebVitals();
