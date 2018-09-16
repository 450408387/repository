import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Redirect,
  Prompt,
  withRouter
 } from "react-router-dom";
 
export default class Class2 extends Component {
  render() {
    return (
      <Router>
      <div>
        <h3>class2</h3>
      </div>
      </Router>
    )
  }
}