import React from 'react'
import PropTypes from 'prop-types'
import logo from './img/logo.png'
import LoginForm from './LoginForm'

const Header = ({setIsLoggedIn}) => {
  
  return (
    <header className="page-header">
      <div className="logo-section">
        <img src={logo} height="150" alt="FarmHub" />
      </div>

      <div className="name-section">
        <h1>farmhub</h1>
        <h5>Gathers farms together</h5>
      </div>

      <div className="user-section">

        <button className='login-link'>
          <LoginForm btnTxt="Log in" isLoggedin={setIsLoggedIn}/>
        </button>
          
        <a href=" " className="signup-link">
          Sign up
        </a>
      </div>
    </header>
  )
}

export default Header;


Header.propTypes = {
  setIsLoggedIn: PropTypes.boolean,
}