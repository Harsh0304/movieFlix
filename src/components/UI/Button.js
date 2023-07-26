import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ name, bg }) => {
  return (
    <Link href="#" className={`btn ${bg}`}>
      {name}
    </Link>
  );
};

export default Button;
