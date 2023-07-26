import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container footer">
      <div>Movie flix</div>
      <Link className="footer__link">Github</Link>
      <Link className="footer__link">Instagram</Link>
      <Link className="footer__link">Facebook</Link>
    </div>
  );
};

export default Footer;
