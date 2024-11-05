import React from 'react'

function Login() {
  return (
    <div>
        <h1>Contact Us</h1>
        <input type='text' placeholder='enter your name...'></input>
        <br/>
        <input type='text' placeholder='email..'></input>
        <br/>
        <input type='text' placeholder='phone No..'></input>
        <br/>
        <input type='text' placeholder='password..'></input>
        <p>Do you have an account? register here,</p>
        <button onClick={'submit'}>login</button>

    </div>
  )
}

export default Login