import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if(password.length < 6){
      setError('Password should be 6 characters long or more')
    }

    if(password !== confirm){
      setError('Your Password Did not Match');
      return;
    }
  }

  return (
    <div className='form-container'>
      <h1 className='form-title'>Signup</h1>
      <form onSubmit={handleSubmit}>
         <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required/>
         </div>
         <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required/>
         </div>
         <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" required/>
         </div>
         <input className='btn-submit' type="submit" value="Sign up" />
      </form>
      <p>Already have an account? <Link to='/login'>Login</Link></p>
      <p className='text-error'>{error}</p>
    </div>
  );
};

export default Signup;