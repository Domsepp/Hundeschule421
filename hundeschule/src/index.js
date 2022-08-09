import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

//let counter = 0;

class Moin extends React.Component{
  render(){
    return <h3>Moin mit Klasse</h3>;
  }
}


class NameNum extends React.Component{
  state = {
    name: this.props.name,
    num: this.props.num
  }
  constructor(props) {
    super(props);
    this.state = {name: "Maggi", num: 1};
  }
  static getDerivedStateFromProps(props, state) {
    return {name: props.name, num: props.num};
  }
  setVals(props){
      this.setState({
        name:props.name,
        num: props.num
      })
  }
  render(){
    return(<div>
      <h3>{this.state.name}</h3>
      <h3>ist meine Nummer {this.state.num}</h3>
    </div>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// const counter = ReactDOM.createRoot(document.getElementById('counter'));
const fun = ReactDOM.createRoot(document.getElementById('functionalComp'));
const moin = ReactDOM.createRoot(document.getElementById('moin'));

root.render(<h1>Hello World</h1>);

let counterVal = 0;

var names = ["Maggi", "Paul", "Janne", "Jasmin", "Hendrik", "Tobi"];


function Displaytime(){
  if(counterVal < names.length){
    fun.render(<NameNum name={names[counterVal]} num={counterVal+1} />);
    counterVal++;
  }
  else{
    counterVal=0;
  }
}


const moinel = <Moin />;
moin.render(moinel);
setInterval(Displaytime,1000);


