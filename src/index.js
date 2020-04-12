import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { DatePicker } from 'antd';
// // import 'antd/dist/antd.css';
// import ProjectCard from './components/project-card';
// import CardHolder from './components/card-holder.js';

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
