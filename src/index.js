import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Userinput';
import Game from './Game';
// import Welcome from './Reactboilerplate';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
// ReactDOM.render(<Welcome />, document.getElementById('root'));
// registerServiceWorker();
