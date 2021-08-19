import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      fetchingData: true,
      weatherData: {}
    }
  }

  render(){
    const { fetchingData } = this.state
    console.log(fetchingData)

    return (
      <div className="App">
        <header className="App-header">
        <h1>Weather App</h1>     
        </header>
        <div>
        {
          fetchingData ?
          <img src={logo} className="App-logo" alt="logo" />
          :
          <h1>Data is received</h1>
        }
        </div>
      </div>
    );
  }
}


export default App;


