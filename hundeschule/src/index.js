import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {useEffect } from 'react';

//let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));
// const counter = ReactDOM.createRoot(document.getElementById('counter'));
const fun = ReactDOM.createRoot(document.getElementById('functionalComp'));
const moin = ReactDOM.createRoot(document.getElementById('moin'));
const buttonDiv = ReactDOM.createRoot(document.getElementById('buttonDiv'));
const listDiv = ReactDOM.createRoot(document.getElementById('nameList'));

class Moin extends React.Component{

  render(){
    return <h3>Moin mit Klasse</h3>;
  }
}

function popup(){
    moin.render(<div>
      <h1>Hello There</h1>
    </div>);
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
  static getDerivedStateFromProps(props) {
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

function NameList(props){
  const nameArr = props.data;
  const ListItems = nameArr.map((val, index)=><li key={index}>{val}</li>);
  return <ul>{ListItems}</ul>
}

function Greet(){
  const[name, setName] = useState("Default");
  function changeIsHere(e){
    setName(e.target.value);
  }
  function chooseGender(){
    if(["Neubert","Rausch"].includes(name)) return "Sehr geehrte Frau "+name;
    else return "Sehr geehrter Herr "+name;
  }
  function addNameTolist(e){
    names.push(name);
    e.preventDefault();
    listDiv.render(<NameList data={names}/>);
  }

  return <div>
  <form onSubmit={addNameTolist}>
  <input type="text" value={name} onChange={changeIsHere}></input>
  <input type='submit' value="Submit"/>
  </form>
  <p>{chooseGender(name)}</p>
  </div>;
}

const greeter = <Greet/>;
root.render(greeter)

const moinel = <Moin />;
moin.render(moinel);
buttonDiv.render(<button onClick={popup}>back</button>)

setInterval(Displaytime,1000);


