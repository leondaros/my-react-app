import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'

// connect((store) => {
//   return{
//     value: store.counter.value
//   }
// })
class App extends Component {

  state = {
    value: 0,
  };

  handleIncrement = () => {
    const newValue = this.state.value + 1
    this.setState({ value: newValue });
  }

  handleDecrement = () => {
    const newValue = this.state.value - 1
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className="App">
        <h1>
          <label className="label">{this.state.value}</label>
        </h1>
        <div className="buttons">
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleIncrement}>Somar</button>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleDecrement}>Subtrair</button>
        </div>
      </div>
    );
  }
}

export default App;
