import {  NavLink } from "react-router-dom";
import Registration from "./Registration";

import React, { Component } from 'react'
import Registration2 from "./Registration2";

export default class Navbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: null,
        email: null,
        schoolName: null,
        cs: null,
        ip: null,
        other: null,
        otherSubject: null,
        isRegistrations: false,

      }
    }
    
    
    registrationHandler=(event)=>{
        const name= event.target.name.value;
        const email= event.target.email.value;
        this.setState({name, email}, ()=>{console.log(this.state);});
        // event.preventDefault();
    }

    middleHandler=(event)=>{
      const schoolName= event.target.schoolName.value;
      const cs= event.target.cs.value;
      const ip= event.target.ip.value;
      const other= event.target.other.value;
      const otherSubject= event.target.otherSubject.value;
      this.setState({schoolName, cs, ip, other, otherSubject}, ()=>{console.log(this.state);});
      event.preventDefault();
    }  
    
  render() {
    return (<>
          <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'><i className="bi bi-hypnotize text-danger "></i></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <NavLink className="nav-link"  to='/'>Home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to='/login'>Login</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to='/registration'>Registration</NavLink>
                  </li>
                
                </ul>
              </div>
        </div>
      </nav>
      {
        this.state.name===null && this.state.email===null ?
        <Registration submit={this.registrationHandler} /> :
        <Registration2 submit={this.middleHandler} />

      }
     
     
    </>)
  }
}
