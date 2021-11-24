import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 200,
  duration: 700
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
