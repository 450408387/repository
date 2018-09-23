import React, { Component } from 'react';
import './../../assets/css/App.css';
import Home from './../home/Home.js';
import 'antd-mobile/dist/antd-mobile.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
      </div>
      </Router>
    );
  }
}
export default App;