import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../src/images/linkedin.png';
import avatar from '../src/images/linkedin.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from "./features/userSlice";

function Header() {
  
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>

      <div className="header__left">
        <img src={Logo} alt="linkedIn Logo" />
        <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notification' />
        <HeaderOption avatar={true} Avatar={avatar} title='me' onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header
