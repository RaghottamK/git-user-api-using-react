import React, { Component } from 'react';
import axios from 'axios'
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

const CardList = (props) => {
  return (
    <div>
     {props.cards.map(card => <Card {...card} /> )}
    </div>
  )
}

class Form extends React.Component {
  state = {userName:''}
  handleSubmit = (event) => {
    event.preventDefault();
   // console.log(this.state.userName);
      axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
      });
  }
  render() {
    //ref = {(input) => this.usernameInput = input}    ------> one way of getting input value using ref
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" value={this.state.userName} onChange = {(event) => this.setState({userName:event.target.value})}  placeholder = "Github username" required/>
        <button type="submit">Add card</button>
      </form>
    )
  }
}

class App extends Component {
   state = {
     cards : [
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
}

  addNewCard = (cardInfo) => {
    console.log(cardInfo);
    this.setState(prevState => ({
      cards:prevState.cards.concat(cardInfo)
    }))
  };
  render() {
    return (
      <div>
        <ReactMain />
        <Form onSubmit = {this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </div>      
    );
  }
}


export default App;
