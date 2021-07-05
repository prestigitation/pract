import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'
import {Provider} from 'react-redux'
import {store} from './store/index'

import './index.css'

import App from './App'

  // создаём кастомную историю
const history = createBrowserHistory()

ReactDOM.render((
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
          <App/>
      </Router>
    </Provider>
  </React.StrictMode>
   ), document.getElementById('root')
  );
reportWebVitals();
