import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
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
=======
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> fdb6be4f463a218af0ac46e8699d6513dc82d1bd
reportWebVitals();
