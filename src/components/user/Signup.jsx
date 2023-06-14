

import React, { useContext, useEffect, useState } from 'react';
import './signup.css';
import { Link, Routes,Route, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import SignInPage from './SignIn';
import BrandLogo from '../../utils/BrandLogo';

function SignUp() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [redirectToSignIn, setRedirectToSignIn] = useState(false);
  const { loginStatus } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    loginStatus ? navigate('/list') : navigate('/signup')
  }, []);
  

  const handleSignUp = () => {
    // Create an object with the user data
    const userData = {
      email: email,
      password: password,
      confirmpassword: confirmpassword
    };

    // Send a POST request to the signup endpoint
    fetch('http://localhost:8001/user/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword : confirmpassword
      })
    })
      .then(response => {
        if(response.status === 201){
          navigate('/signin')
        }
        response.json()
      })
      .then(data => {
        console.log(data);  
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
       
      });
      setemail("");
      setPassword("");
      setConfirmpassword("");
  };
  
  if (redirectToSignIn) {
    return <SignInPage />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="white">
          {/* <h1 className="logoText">Logo</h1> */}
          {/* <img  src={BrandLogo} alt="Logo" className="logoImage" />  */}
          <BrandLogo/>
          <p className="subText">Create New Account</p>
          <input
            type="text"
            placeholder="User ID"
            className="inputField"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="inputField2"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="inputField3"
            value={confirmpassword}
            onChange={e => setConfirmpassword(e.target.value)}
          />
          <button className="signInButton" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        <Link className="signIn1" to="/signIn">
          Sign In
        </Link>
        
      </header>
    </div>
  );
}

export default SignUp;

