import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
function Login() {
    const [values, setValues] = useState({
        email: ' ',
        password: ' '
    })

    const [errors, setErrors] = useState({})

    const handleInput=(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }


  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: '#1A5E63' }}>
      <div className='bg-rectangle p-5 rounded w-25 text-center' style={{ backgroundColor: '#00BFB2', opacity: 0.9 }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#fff' }}>Log In</h2>
       <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email" className='text-white'>
              <strong>Email</strong>
            </label>
            <input type="email" placeholder='Enter email' name= 'email'
            onChange={handleInput} className='form-control rounded-pill bg-transparent text-white' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='text-white'>
              <strong>Password</strong>
            </label>
            <input type="password" placeholder='Enter password' name= 'password'
            onChange={handleInput} className='form-control rounded-pill bg-transparent text-white' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type = 'submit' className='btn btn-success w-100 rounded-pill mt-3' style={{ backgroundColor: '#ECEBE4', color: '#000' }}>Log in</button>
          <div className='mt-3 text-white'>
            Don't have an account? <Link to="/Signup" className='text-white'>Sign up</Link>.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;