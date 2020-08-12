import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// import { Provider } from 'react-redux';

ReactDOM.render(
    // <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));
