import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.css';
require('dotenv').config()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
