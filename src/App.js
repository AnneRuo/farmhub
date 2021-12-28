import React from "react";
import {
    NavLink,
    Route,
    Routes,
    BrowserRouter as Router,
  } from "react-router-dom";
  import Home from "./components/Home";
  import Data from "./components/Data";
  import Contact from "./components/Contact";
  import Footer from "./components/Footer";
  import Header from "./components/Header";

const App = () => {
    return (
        <Router>
            <div className="page-content">
                
                <div className="content-wrap">
                    <div className="title-section">
                        <Header />
                    </div>
                    <ul className="header-section">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/data">Farm Data</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path="/data" element={<Data />}/>
                        <Route path="/contact" element={<Contact />}/>
                    </Routes>
                    </div>
                </div>

                <div className="footer">
                    <Footer />
                </div>
            </div>
        </Router>
        
    );
}

 
export default App;
