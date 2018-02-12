import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import { counterIncrement, counterDecrement} from './actions/counterActions'

class App extends Component {

  handleIncrement = () => {
    return this.props.counterIncrement();
  }

  handleDecrement = () => {
    return this.props.counterDecrement();
  }

  render() {
    return (
      <div className="App">
        <h1>
          <label className="label">{this.props.counter.value}</label>
        </h1>
        <div className="buttons">
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleIncrement}>Somar</button>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleDecrement}>Subtrair</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({counter}) =>{
  console.log({counter})
  return {counter};
};

const mapDispatchToProps = (dispatch) => {
  return {
    counterIncrement: () => {
      dispatch(counterIncrement());
    },
    counterDecrement: () => {
      dispatch(counterDecrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
