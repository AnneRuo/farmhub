import React, { useState } from 'react'
import {
  NavLink,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom'
import Home from './components/Home'
import Farms from './components/Farms'
import Data from './components/Data'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import MyFarm from './components/MyFarm'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <Router>
      <div className="page-content">
        <div className="content-wrap">
          <div className="title-section">
            <Header loggedIn={setIsLoggedIn}/>
          </div>
          <ul className="header-section">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/farms">Farms</NavLink>
            </li>
            {isLoggedIn && <li>
              <NavLink to="/myfarm">My Farm</NavLink>
            </li>}
            <li>
              <NavLink to="/data">Farm Data</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/farms" element={<Farms />} />
              <Route exact path="/myfarm" element={<MyFarm />} />
              <Route path="/data" element={<Data />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
