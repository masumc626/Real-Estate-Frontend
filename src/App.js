// import { useState } from 'react';
// import './App.css';
import './styles/utils.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './components/user/SignIn';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import SignUp from './components/user/Signup';
import List from './components/property/List';
// import BasicInfo from './components/property/BasicInfo';
// import Details from './components/property/Details';
// import GeneralInfo from './components/property/GeneralInfo';
// import LocationInfo from './components/property/LocationInfo';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Home from './components/Home';
// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  const {loginStatus} = useContext(UserContext);
  console.log(loginStatus)

  return (
    <BrowserRouter>
      {
        loginStatus ?
        <>
        <SideNav/>
        <TopNav/>
        </>
        :
        <></>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/property' element={<List/>}/>
        {/* <Route path='/basicinfo' element={<BasicInfo/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/generalinfo' element={<GeneralInfo/>}/>
        <Route path='/locationinfo' element={<LocationInfo/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
