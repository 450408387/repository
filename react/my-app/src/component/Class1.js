import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Redirect,
  Prompt
 } from "react-router-dom";
 const About =({match})=>{
   return <h3>about{match.params.id}</h3>
 }
class Class1 extends Component {
  constructor (props){
    super(props);
    this.state={
      isPrompt:true
    }
  }
  render() {
    return (
      <Router>
      <div>
        <Prompt 
        when={this.state.isPrompt}
        message='要跳转吗'
        />
        <Link to="/class1/">home</Link>|
        <Link to="/class1/about/111">about</Link>|
        <Link to="/class1/redirect">redirect</Link>|
        <Route exact path="/class1/" render={()=><h3>renderhome</h3>}/>
        <Route path="/class1/about/:id" component={About}/>
        <Route path="/class1/redirect" render={()=><Redirect to="/class1/"/>}/>
      </div>
      </Router>
    )
  }
}

export default Class1