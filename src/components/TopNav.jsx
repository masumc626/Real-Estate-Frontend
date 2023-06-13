import React, { useContext, useState } from 'react'
import '../styles/topnav.css'
import ProfileLogo from '../utils/ProfileLogo';
import DropDownLogo from '../utils/DropDownLogo';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function TopNav() {
  const [logOutbtn , setlogOutbtn] = useState(false);
  const {updateLoginStatus, userName, userId} = useContext(UserContext);
  const navigate = useNavigate()

  const username = userName ||"Eshwar"
  const userid = userId || "06PPD125"
  return (
    <div className='top-nav non-selec-clr'>
      <p className=''>USER ID : {userid}</p>
      <div>
      <p className='profile-name' onClick={() => {
        setlogOutbtn(!logOutbtn);
      }}>
        <ProfileLogo/> 
        {username}
        <DropDownLogo/>
      </p>
      {logOutbtn ? <p className='logout-btn' onClick={()=> {
        updateLoginStatus(false);
        navigate('/login');
      }}>Log out</p> : <></>}
      </div>
    </div>
  )
}
