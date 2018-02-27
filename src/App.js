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
      <img src="http://placehold.it/75"/>
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize:'1.25em',fontWeight:'bold'}}>Name goes here...</div>
        <div>Information goes here...</div>
      </div>
    </div>
  );
}

const CardList = (props) => {
  return (
    <div>
      <Card />
    </div>
  )
}




class App extends Component {
  render() {
    return (
      <div>
        <ReactMain />
        <CardList />
      </div>      
    );
  }
}


export default App;
