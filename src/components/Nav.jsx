import React, { useState, useEffect } from "react";
import "./nav.css";
import search from './images/search-solid.svg';
import gift from './images/gift-solid.svg';
import bell from './images/bell-solid.svg'

function Nav() {
  // will add class using show state to our nav bar 
  const [show, setShow] = useState(false);
  
  // setting show value on the basis of the distance from the top(scroll y)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    // adding class make_nav_black on the basis of show state
    <div className={`navbar ${show ? "make_nav_black" : null}`}>
      <div className="inner_navbar1">
        <img
          className="NetflixLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix-logo"
        />
        <ul className="navList">
          <li>Home</li>
          <li>Tv shoes</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="right_side_nav">
        <img className="Right_side_icons" src={search} alt="netflix-logo" />
        <img className="Right_side_icons" src={gift} alt="netflix-logo" />
        <img className="Right_side_icons" src={bell} alt="netflix-logo" />
      </div>
    </div>
  );
}

export default Nav;
