import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="sigil"
        src="https://i.pinimg.com/originals/4a/bc/38/4abc38758eba60d6712bd86dd1542697.png"
        alt="House Stark Sigil"
      />
      <p className="copyright">© Olive Branch Designs</p>
      <h3>... winter is coming.</h3>
    </div>
  );
};

export default Footer;
