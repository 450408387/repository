import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Class1 from './component/Class1';
import Class2 from './component/Class2';
import Class3 from './component/Class3';
import Class5 from './component/Class5';
import Class6 from './component/Class6';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

const NoMatch=()=><h1>404</h1>
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Link to='/'>class1</Link>|
          <Link to='/class2'>class2</Link>|
          <Link to='/class3'>class3</Link>|
          <Link to='/class4'>class4</Link>|
          <Link to='/class5'>class5</Link>|
          <Link to='/class6'>class6</Link>|
          <Switch>
          <Route exact path='/' component={Class1}/>
          <Route path='/class2' component={Class2}/>
          <Route path='/class3' component={Class3}/>
          <Route path='/class5' component={Class5}/>
          <Route path='/class6' component={Class6}/>
          <Route component={NoMatch}/>
          </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
