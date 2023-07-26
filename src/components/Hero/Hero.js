import React from "react";
import Button from "../UI/Button";
import "./Hero.css";
const Hero = () => {
  return (
    <header id="menu" className="header">
      <div className="container header__container">
        <div className="right">
          <h3>Are you interested ? find most popular Movies</h3>
          <h1>Movies flix</h1>
          <p>
            Italian cuisine is one of the most famous kitchens around the world
            and is one of the most luxurious and characteristic cuisines in the
            world. It is the origin of pasta and pizza that is unparalleled
            anywhere else.
          </p>
          <div className="buttons">
            <Button name="whatch now" bg="btn__now" />
            <Button name="whatch trailer" bg="btn__trailer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
