
import './signInpage.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BrandLogo from '../../utils/BrandLogo';
import { UserContext } from '../../context/UserContext';

function SignInPage() {
  const [email, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { loginStatus, updateUserData, updateLoginStatus, SERVER_ADDRESS } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    loginStatus ? navigate('/list') : <></>;
  }, []);

  const handleSignIn = async () => {
    // Create the payload object with user credentials

    // Make an HTTP POST request to save user data to the database

    await fetch(`${SERVER_ADDRESS}user/signin`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email : email,
        password : password
      })
    })

    .then(response => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        throw new Error("User not registered. Please sign up to continue.");
      } else {
        throw new Error("Sign in failed.");
      }
    })

    // .then(response => response.json())
    .then(data => {
      // Handle the response from the API
      if(data.status === "success"){
        console.log(data)
        updateUserData(data);
        updateLoginStatus(true);
        navigate('/list')
        console.log('Response from server:', data);
      }
      else{
        throw new Error("sign in failed")
      }

    })
    // .catch(error => {
    //   console.error('Error:', error);
    //   // Handle the error
    // });
    .catch(error => {
      console.error('Error:', error.message);
      alert(error.message); // Display the error message as an alert
    });
    

    setUserId('');
    setPassword('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="whiteBox">
          <BrandLogo/>
          <p className="subText">Enter your credentials to access your account</p>
          <input
            type="text"
            placeholder="User ID"
            className="inputField11"
            value={email}
            onChange={event => setUserId(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="inputField22"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button className="signInButton" onClick={handleSignIn}>Sign In</button>
          <Link className="signIn" to="/signup">Sign Up</Link>
        </div>
        <p className="signInn">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </header>
    </div>
  );
}

export default SignInPage;










// import React, { useContext, useEffect, useState } from 'react';
// import '../../styles/login.css';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import BrandLogo from '../../utils/BrandLogo';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';


// export default function Login() {

//     const [logindata, setLoginData] = useState({ email: "", password: "" });
//     const [error, setError] = useState(false);

//     const { loginStatus } = useContext(UserContext);
//     const navigate = useNavigate()
//     useEffect(() =>{
//         loginStatus ? navigate('/property') : navigate('/login')
//     },[]);

    // const data = useContext(UserContext)

    // useEffect(() => {
    //     fetch(`http://localhost:8080/login`, 
    //         {
    //             method: "post",
    //             headers : {
    //                 "Content-type" : "application/json",
    //                 "Accept" : "application/json"
    //             },
    //             body: JSON.stringify({
    //                 ...logindata
    //             })
    //     })
    //     .then(res => {
    //         if(res.status === 200) return res.json();
    //         throw new Error("Invalid credentials");
    //     }) 
    //     .then(data => {
    //         console.log(data);
    //         setLogin(false);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         setError(err);
    //     });

    //     return ()=>{
    //         setLogin(false);
    //     }
    // }, [login])

//     const handleLogin = () => {
//         // setLogin(true)
//     } 


//     return (
//         <div className='login-container green-bg'>
//             <div className='login-form white-bg br-10px'>
//                 <BrandLogo />
//                 <h6 className='black-clr txt-center mb'>Enter your credentials to access your account</h6>
//                 <FloatingLabel
//                     className='input-box'
//                     controlId="floatingInput"
//                     label="Email address"
//                 >
//                     <Form.Control
//                         type="email" placeholder="name@example.com"
//                         onChange={(e) => {
//                             setLoginData((logindata) => ({
//                                 ...logindata,
//                                 email: e.target.value
//                             }))
//                         }}
//                     />
//                 </FloatingLabel>
//                 <FloatingLabel
//                     className='input-box'
//                     controlId="floatingPassword" label="Password"
//                 >
//                     <Form.Control
//                         type="password" placeholder="Password"
//                         onChange={(e) => {
//                             setLoginData((logindata) => ({
//                                 ...logindata,
//                                 password: e.target.value
//                             }))
//                         }}
//                     />
//                 </FloatingLabel>
//                 <button
//                     onClick={handleLogin}
//                     className='blue-bg white-clr login-btn br-5px'
//                 >Sign in
//                 </button>
//                 <h6 className='blue-clr bold'>
//                     <Link
//                         to={"/register"}
//                         className='blue-clr bold txt-none'
//                     >Sign up
//                     </Link>
//                 </h6>
//             </div>
//             <h6 className='txt-center'>
//                 Don't have an account?
//                 <Link
//                     to={"/register"}
//                     className='blue-clr bold txt-none'
//                 > Sign up
//                 </Link>
//             </h6>
//         </div>
//     )
// }

