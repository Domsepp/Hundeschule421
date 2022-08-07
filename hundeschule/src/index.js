import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//let counter = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));
const counter = ReactDOM.createRoot(document.getElementById('counter'));

root.render(<h1>Hello World</h1>);

let counterVal = 0;

function displaytime(){
  counterVal++;
  counter.render(<h1>{counterVal}</h1>);
}

setInterval(displaytime,1000);


