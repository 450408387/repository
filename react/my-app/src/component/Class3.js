import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Link 
   } from "react-router-dom";
const Home=()=><h3>home</h3>
const About=()=><h3>about</h3>
const MenuLink=({to,label})=>{
  return(
    <Route
      path={to}
      exact
      children={({match})=>{
        return(
          <div>
            {match?">":""}
            <Link to={to}>{label}</Link>
          </div>
        )
      }}
    />
  )
}
export default class Class3 extends Component {
  render() {
    return (
      <Router>
      <div>
        <MenuLink to="/" label="home">home</MenuLink>
        <MenuLink to="/about" label="about">about</MenuLink>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
      </Router>
    )
  }
}
