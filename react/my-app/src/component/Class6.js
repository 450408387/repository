import React, { Component } from 'react'
import {connect} from 'react-redux';
const add=()=>{
    return{
        type:'ADD'
    }
}
class Class6 extends Component {
    addHandle(){
        this.props.add()
    }
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.addHandle.bind(this)}>加1</button>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        add:()=>dispatch(add())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Class6)