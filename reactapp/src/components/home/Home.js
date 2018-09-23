import React, { Component } from 'react';
import './../../assets/css/Home.css';
import Header from './../global/Header';
import Slider from './Slider';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slider/>
            </div>
    )
  }
}