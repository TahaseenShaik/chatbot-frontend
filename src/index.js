import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import {  combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import chatbotReducer from './store/reducers/chatbotReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  chatbot : chatbotReducer
})
const store=createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

