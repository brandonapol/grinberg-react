import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// The reason why bootstrap.min.css is imported before index.css is that this 
// gives the application the option to 
// redefine or override the styles that come with the library.
// import reportWebVitals from './reportWebVitals';
// tool: create a git clarify script later to automate removal of JS cruft

// TEACH HTML AND COMPONENTS AS NODES!!! DIAGRAM AN APP!!!
const root = ReactDOM.createRoot(document.getElementById('root'));
// object.function(content)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
