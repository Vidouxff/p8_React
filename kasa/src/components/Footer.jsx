import React from 'react';
import Logo from '../images/logos/LOGO2.png'; 

function Footer({ isAProposClicked, isCardDetailsVisible, isErrorPage }) {
    return (
      <footer className={`footer 
                        ${isAProposClicked ? "addedMargin" : ""} 
                        ${isCardDetailsVisible ? "anotherMarginClass" : ""}
                        ${isErrorPage ? "errorPageMarginClass" : ""}`}>
        <div className="footer__ctner">
          <img src={Logo} className="footer__logo" alt="logo kasa"/>
          <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
