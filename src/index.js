import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as contentful from 'contentful'
import App from './components/app';
import reducers from './reducers';
import 'jquery';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const client = contentful.createClient({
  space: 'w2bsg537649g',
  accessToken: '790c1b73871ab3dae9fd4988f0ec37fd458d807a4b291c9212017358ee847e4c' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));
