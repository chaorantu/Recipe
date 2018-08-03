import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from "./component/Router"
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
