import React, { Component } from 'react';
import Card from './Cards/Card';
import './App.css';
import cardsdata from './cardsdata';

class App extends Component {
  render() {
    var card = cardsdata.map((card) => {
      return (<Card card={card}/>);
    });
    return (
      <div className="App">
        {card}
      </div>
    );
  }
}

export default App;
