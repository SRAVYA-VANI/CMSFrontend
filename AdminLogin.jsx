import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
 
import './AdminLogin.css';

function AdminLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Handle regular student login logic here

    // Redirect to the student dashboard if successful
    // For example, with React Router:
    // history.push('/student/dashboard');
    fetch('https://localhost:44324/api/Account/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // If the login is successful, set loggedIn to true
          setLoggedIn(true);
        } else {
          // If the login fails, display an error message
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred');
      });
  };

  return (
    <div>
     
    <div className='form1'>
    
      <div className='container'>
        {loggedIn ? (
          <Navigate to="/course" />
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className='mainforms'>
             <h1 className='wel'><marquee>WELCOME BACK !</marquee></h1><br></br>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            
           
            {error && <div>{error}</div>}<br></br>
            <div className='loginbutton'>
              
            <Link to="/Course1" className='LOGIN'>LOGIN</Link>
            </div>
            <br />
            
          </form>
        )}
      </div>
    </div>
    </div>
  );
}

export default AdminLoginForm;
