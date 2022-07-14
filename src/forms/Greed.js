
import React from 'react'

export default function Greed(props) {
  return (
    <div className='container card mt-5 p-3 text-center '>
        <h1>hello {props.name}</h1>
        <h1>thanks For your Login</h1>
        <h1>verifaction send in your {props.email}</h1>
    </div>
  )
}
