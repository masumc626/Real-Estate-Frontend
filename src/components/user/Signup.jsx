

// import React, { useContext, useEffect, useState } from 'react';
// import './signup.css';
// import { Link, Routes,Route, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';
// import SignInPage from './SignIn';
// import BrandLogo from '../../utils/BrandLogo';

// function SignUp() {
//   const [email, setemail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmpassword] = useState('');
//   const [redirectToSignIn, setRedirectToSignIn] = useState(false);
//   const { loginStatus } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loginStatus ? navigate('/list') : navigate('/signup')
//   }, []);
  

//   const handleSignUp = () => {
//     // Create an object with the user data
//     const userData = {
//       email: email,
//       password: password,
//       confirmpassword: confirmpassword
//     };

//     // Send a POST request to the signup endpoint
//     fetch('https://real-estate-backend-g14x.onrender.com/user/signup', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//         confirmPassword : confirmpassword
//       })
//     })
//       .then(response => {
//         if(response.status === 201){
//           navigate('/signin')
//         }
//         response.json()
//       })
//       .then(data => {
//         console.log(data);  
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
       
//       });
//       setemail("");
//       setPassword("");
//       setConfirmpassword("");
//   };
  
//   if (redirectToSignIn) {
//     return <SignInPage />;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="white">
//           {/* <h1 className="logoText">Logo</h1> */}
//           {/* <img  src={BrandLogo} alt="Logo" className="logoImage" />  */}
//           <BrandLogo/>
//           <p className="subText">Create New Account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField"
//             value={email}
//             onChange={e => setemail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputField2"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="inputField3"
//             value={confirmpassword}
//             onChange={e => setConfirmpassword(e.target.value)}
//           />
//           <button className="signInButton" onClick={handleSignUp}>
//             Sign Up
//           </button>
//         </div>
//         <Link className="signIn1" to="/signIn">
//           Sign In
//         </Link>
        
//       </header>
//     </div>
//   );
// }

// export default SignUp;



// import React, { useContext, useEffect, useState } from 'react';
// import './signup.css';
// import { Link, Routes, Route, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';
// import SignInPage from './SignIn';
// import BrandLogo from '../../utils/BrandLogo';

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [redirectToSignIn, setRedirectToSignIn] = useState(false);
//   const { loginStatus } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loginStatus ? navigate('/list') : navigate('/signup');
//   }, []);

//   const validateEmail = () => {
//     // Check if the email contains the @ symbol
//     return email.includes('@');
//   };

//   const validatePassword = () => {
//     // Check if the password has a minimum length of 6 characters
//     return password.length >= 6;
//   };
  

//   const handleSignUp = () => {
//     // Validate the email and password
//     if (!validateEmail()) {
//       alert('Invalid email format, Email should contain @.');
//       return;
//     }

//     if (!validatePassword()) {
//       alert('Password should be at least 6 characters long.');
//       return;
//     }
//     if (password !== confirmPassword) {
//       alert('Password and Confirm Password do not match.');
//       return;
//     }
    
    
    

//     // Create an object with the user data
//     const userData = {
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword
//     };
//     fetch('https://real-estate-backend-g14x.onrender.com/user/signup', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(response => {
//         if (response.status === 201) {
//           alert('User registered successfully!');
//           navigate('/signin');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
//       });
//     // Send a POST request to the signup endpoint
//     fetch('https://real-estate-backend-g14x.onrender.com/user/signup', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(response => {
//         if (response.status === 201) {
//           navigate('/signin');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
//       });

//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   if (redirectToSignIn) {
//     return <SignInPage />;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="white">
//           {/* <h1 className="logoText">Logo</h1> */}
//           {/* <img  src={BrandLogo} alt="Logo" className="logoImage" />  */}
//           <BrandLogo />
//           <p className="subText">Create New Account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputField2"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="inputField3"
//             value={confirmPassword}
//             onChange={e => setConfirmPassword(e.target.value)}
//           />
//           <button className="signInButton" onClick={handleSignUp}>
//             Sign Up
//           </button>
//         </div>
//         <Link className="signIn1" to="/signIn">
//           Sign In
//         </Link>
//       </header>
//     </div>
//   );
// }

// export default SignUp;




import React, { useContext, useEffect, useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import SignInPage from './SignIn';
import BrandLogo from '../../utils/BrandLogo';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [redirectToSignIn, setRedirectToSignIn] = useState(false);
  const { loginStatus, SERVER_ADDRESS } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {

    loginStatus ? navigate('/list') : navigate('/signup');
  }, []);

  const validateEmail = () => {
    // Check if the email contains the @ symbol
    if (!email.includes('@')) {
      setEmailError('Invalid email format. Email should contain @.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    // Check if the password has a minimum length of 6 characters
    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords are not matching.');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };
=======
    loginStatus ? navigate('/list') : navigate('/signup')
  });
  


  const handleSignUp = () => {
    // Validate the email, password, and confirm password
    if (!validateEmail() || !validatePassword() || !validateConfirmPassword()) {
      return;
    }

    // Create an object with the user data

    const userData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

   

    // Send a POST request to the signup endpoint
    fetch(`${SERVER_ADDRESS}user/signup`, {

      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.status === 201) {
          alert('User registered successfully!');
          navigate('/signin');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  if (redirectToSignIn) {
    return <SignInPage />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="white">
          <BrandLogo />
          <p className="subText">Create New Account</p>
          <input
            type="text"
            placeholder="User ID"
            className="inputField"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            className="inputField2"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <input
            type="password"
            placeholder="Confirm Password"
            className="inputField3"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
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
