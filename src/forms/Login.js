import './Login.css'
import React from 'react'
// import {  Link, NavLink, } from "react-router-dom"

export default function Login(prpos) {
  return (
    <div className='container card p-3 mt-5 login-container'>
        <h1 className='text-center'>Login Form</h1>
        <form onSubmit={prpos.submit}>
            <div className='form-group'>
                <label htmlFor="name">Username: </label>
                <input type="text"  className='form-control' name='name' required placeholder="Username" />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email: </label>
                <input type="email" className='form-control' name='email' required placeholder="Email" />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password: </label>
                <input type="password" className='form-control' name='password' required placeholder="Password" />
            </div>
            <button type="submit" className = 'btn btn-primary mt-2'>Login</button>
            <div className='form-group'>
                <label className='mt-2 mb-2' >New User Registration</label>
            </div>
        </form>
    </div>
   
  )
}
