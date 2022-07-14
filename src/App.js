import React, { Component } from 'react';
import './App.css';
import Navbar from './forms/Navbar';
// import { Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import Contact from './Contact'
// import Registration from './forms/Registration'
// import { BrowserRouter } from 'react-router-dom'
// import Login from './forms/Login';
// import Greed from './forms/Greed';
// import './App.css';
// import {
//     Route,
//     Routes,
//   } from "react-router-dom";
// import Login from './Forms/Login';
// import Navbar from './Navbar';
// import Home from './Home';
// import Contact from './Contact';
// import Registration from './Forms/Registration';

  





export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogin: false,
       name:null,
       email:null,
       password:null,
    }
  }
  loginhandler=(event)=>{
    event.preventDefault();
  const name= event.target.name.value;
  const email= event.target.email.value;
  const password= event.target.password.value;
  this.setState({name, email, password, isLogin: true});
  console.log(this.setState);
  }
  render() {
    return (<div>
      <Navbar />
      {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
      // </Routes> */}
      {/* {this.state.isLogin ? <Greed name={this.state.name} email={this.state.email}/> : <Login submit={this.loginhandler} />} */}
    </div>)
  }
}
