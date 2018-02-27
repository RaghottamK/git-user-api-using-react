import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ReactMain = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      {/* <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p> */}
    </div>
  )
}

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url}/>
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize:'1.25em',fontWeight:'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}

let data = [
  {
    name:"RaghottamK",
    avatar_url:"https://avatars3.githubusercontent.com/u/23549690?v=4",
    company:"Cerner"
  },
  {
    name:"Pooja Bhaumik",
    avatar_url:"https://avatars3.githubusercontent.com/u/19394896?v=4",
    company:"xxCode"
  }
]

const CardList = (props) => {
  return (
    <div>
     {props.cards.map(card => <Card {...card} /> )}
    </div>
  )
}




class App extends Component {
  render() {
    return (
      <div>
        <ReactMain />
        <CardList cards={data} />
      </div>      
    );
  }
}


export default App;
