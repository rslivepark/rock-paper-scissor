import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppClass from './AppClass';
import BoxClass from './component/BoxClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BoxClass></BoxClass>
  </React.StrictMode>
);


reportWebVitals();
