//import React from 'react';
//import ReactDOM from 'react-dom';
//
//ReactDOM.render(
//  React.createElement('h1', null, 'Hello from React!'),
//  document.getElementById('root')
//);


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Volunteer from "./components/volunteer";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Volunteer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();