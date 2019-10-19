import React, { Component } from 'react';
import Header from './components/Header'
import Feed from './components/Feed'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Feed/>
      </div>
    );
  }
}

export default App;
