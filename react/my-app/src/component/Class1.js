import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Redirect,
  Prompt,
  withRouter
 } from "react-router-dom";
 const About =({match})=>{
   return <h3>about{match.params.id}</h3>
 }
 const Menulink =({to,lable})=>{
   return(
    <Route 
    path={to}
    children={()=>{
     return(
      <div>
        <Link to={to}>{lable}</Link>
      </div>
     )
    }}
  />
   )
 }
 const RouterChange =withRouter(({history})=>{
   return(
     <div>
       <button onClick={()=>{history.push('/class1/')}}>首页</button>
     </div>
   )
 })
class Class1 extends Component {
  constructor (props){
    super(props);
    this.state={
      isPrompt:false
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
        <Menulink to="/class1" lable="menulink"/>
        <Route exact path="/class1/" render={()=><h3>renderhome</h3>}/>
        <Route path="/class1/about/:id" component={About}/>
        <Route path="/class1/redirect" render={()=><Redirect to="/class1/"/>}/>
        <RouterChange/>
      </div>
      </Router>
    )
  }
}

export default Class1