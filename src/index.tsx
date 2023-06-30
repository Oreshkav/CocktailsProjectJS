import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
// import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <BrowserRouter>
  <HashRouter>
    {/* <Provider store={store}> */}
    <App />
  </HashRouter>
  // </Provider> 
  // </BrowserRouter>

);



