import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // CSS de bootstrap
import '../node_modules/bootstrap/dist/js/bootstrap.min.js' // Archivo Javascript de bootstrap


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
