import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupValidation from './SignupValidation';
import axios from 'axios'

function Signup() {
  
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({...values, [event.target.name]: [event.target.value]})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(SignupValidation(values));
  
    try {
      const response = await axios.post('http://localhost:8081/Signup/signup', values);
      console.log('Server response:', response.data);
      // Redirect or handle success as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };
  

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: '#1A5E63' }}>
      <div className='bg-rectangle p-5 rounded w-25 text-center' style={{ backgroundColor: '#00BFB2', opacity: 0.9 }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#fff' }}>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstname' className='text-white'>
              <strong>First Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter first name'
              name='firstname'
              onChange={handleInput}
              className='form-control rounded-pill bg-transparent text-white'
            />
            {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='lastname' className='text-white'>
              <strong>Last Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter last name'
              name='lastname'
              onChange={handleInput}
              className='form-control rounded-pill bg-transparent text-white'
            />
            {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='text-white'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={handleInput}
              className='form-control rounded-pill bg-transparent text-white'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='text-white'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-pill bg-transparent text-white'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-pill mt-3' style={{ backgroundColor: '#ECEBE4', color: '#000' }}>
            Create Account
          </button>
          <div className='mt-3 text-white'>
            Already a member? <Link to='/' className='text-white'>Log In</Link>.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
