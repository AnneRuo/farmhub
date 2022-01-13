import React from 'react'
import logo from './img/logo.png'

const Header = () => {
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
        <a href=" " className="login-link">
          Log in
        </a>
        <a href=" " className="signup-link">
          Sign up
        </a>
      </div>
    </header>
  )
}

export default Header
