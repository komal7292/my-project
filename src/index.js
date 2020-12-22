import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo from './Demo';
// import Avatar from './Avatar';
import Learning from './components/learning';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( <Learning />,
  document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
