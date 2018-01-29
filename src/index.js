import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import PopcornApp from './App';

ReactDOM.render(
  <BrowserRouter>
    <PopcornApp />
  </BrowserRouter>,
  document.getElementById('root')
);
