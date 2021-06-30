import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'

import './index.css'

import App from './App'

  // создаём кастомную историю
const history = createBrowserHistory()

ReactDOM.render((
  <React.StrictMode>
    <Router history={history}>
       <App/>
     </Router>
  </React.StrictMode>
   ), document.getElementById('root')
  );
reportWebVitals();
