import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import combiReducers from './redux/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combiReducers, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter> 
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);