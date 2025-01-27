import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './pages/projects'
import Projects from './pages/projects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Projects/> */}
  </React.StrictMode>
);



