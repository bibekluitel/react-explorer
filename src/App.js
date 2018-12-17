import React, { Component } from 'react';
import {initialJson } from './Constants';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p> React Explorer</p>
      </div>
    );
  }
}

App.defaultProps= {
  data: initialJson
};

export default App;
