import React from "react";
import PropTypes from 'prop-types'

const Login = ({setIsLoggedIn}) => {

  const handleSubmit = () => {
    setIsLoggedIn(true)
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

Login.propTypes = {
  setIsLoggedIn: PropTypes.bool,
}