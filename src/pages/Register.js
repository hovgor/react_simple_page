import React from 'react'

function Register() {
  return (
    <div className='App-header'>
      <h1>this is a register page</h1>

      <input type='text' placeholder='name' />
      <input type='text' placeholder='email' />
      <input type='password' placeholder='password' />
      <input type='password' placeholder='password confirm' />
      <button>Submit</button>
    </div>
  )
}

export default Register