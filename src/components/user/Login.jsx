import React, { useContext, useEffect, useState } from 'react';
import '../../styles/login.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import BrandLogo from '../../utils/BrandLogo';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


export default function Login() {

    const [logindata, setLoginData] = useState({ email: "", password: "" });
    const [error, setError] = useState(false);

    const { loginStatus } = useContext(UserContext);
    const navigate = useNavigate()
    useEffect(() =>{
        loginStatus ? navigate('/property') : navigate('/login')
    },[]);

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

    const handleLogin = () => {
        // setLogin(true)
    } 


    return (
        <div className='login-container green-bg'>
            <div className='login-form white-bg br-10px'>
                <BrandLogo />
                <h6 className='black-clr txt-center mb'>Enter your credentials to access your account</h6>
                <FloatingLabel
                    className='input-box'
                    controlId="floatingInput"
                    label="Email address"
                >
                    <Form.Control
                        type="email" placeholder="name@example.com"
                        onChange={(e) => {
                            setLoginData((logindata) => ({
                                ...logindata,
                                email: e.target.value
                            }))
                        }}
                    />
                </FloatingLabel>
                <FloatingLabel
                    className='input-box'
                    controlId="floatingPassword" label="Password"
                >
                    <Form.Control
                        type="password" placeholder="Password"
                        onChange={(e) => {
                            setLoginData((logindata) => ({
                                ...logindata,
                                password: e.target.value
                            }))
                        }}
                    />
                </FloatingLabel>
                <button
                    onClick={handleLogin}
                    className='blue-bg white-clr login-btn br-5px'
                >Sign in
                </button>
                <h6 className='blue-clr bold'>
                    <Link
                        to={"/register"}
                        className='blue-clr bold txt-none'
                    >Sign up
                    </Link>
                </h6>
            </div>
            <h6 className='txt-center'>
                Don't have an account?
                <Link
                    to={"/register"}
                    className='blue-clr bold txt-none'
                > Sign up
                </Link>
            </h6>
        </div>
    )
}
