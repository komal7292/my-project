import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'

class Demo extends Component{
  render(){
    return <div className = "hello_komal">
            <h1>hiii {this.props.name}</h1>,
            <p>welcome to my React tution classes.</p>
           </div>
    }
}
export default Demo;
