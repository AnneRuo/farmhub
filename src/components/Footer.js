import React from "react";
 
const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-row">
                <div className="footer-about">
                    <h2 className="footer-about-title">About</h2>
                    <p>An exercise for Solita Dev Academy 2022.
                    Solita has received an interesting project offer 
                    to create a UI and a backend for displaying data 
                    from different farms.
                    </p>
                </div>
                <div className="footer-contact">
                    <h2 className="footer-contact-title">Contact</h2>
                    <p>anne.s.ruohonen@gmail.com 
                        <br/><a className="url" href="https://github.com/AnneRuo" target="_blank" rel="noreferrer">AnneRuo</a>
                        <br/><a className="url" href="https://www.linkedin.com/in/anne-ruohonen/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </p>
                </div>
            </div>
    </footer>
    );
  }
 
export default Footer;