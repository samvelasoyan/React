import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers/index'

const store = createStore(combineReducers(reducer), applyMiddleware(thunk))

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>
 , document.getElementById('root'));
