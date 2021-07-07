import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'
import {Provider} from 'react-redux'
import {store,persistor} from './store/index'
import {PersistGate} from 'redux-persist/integration/react'

import './index.css'

import App from './App'

  // создаём кастомную историю
const history = createBrowserHistory()

ReactDOM.render((
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App/>
          </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
   ), document.getElementById('root')
  );
reportWebVitals();
