import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); //megváltoztatja a click alapállapotának az ellenkezőjére. true-ról falsere, falseról truera
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      //ha gördítek 100 pixelt akkor a setColor alapállapota megváltozik truera, ha nem akkor false
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor); //a scrollolás történik akkor fusson le a changeColor

  //Ha a color változó true értékű akkor rárakja a header és header-bg classt, ha false akkor csak a headert
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Galaxy Travel</h1>
      </Link>
      <ul className={click ? "nav-menu nav-active" : "nav-menu"}>
        <li>
          <Link to="/">Kezdőoldal</Link>
        </li>
        <li>
          <Link to="/pricing">Árak</Link>
        </li>
        <li>
          <Link to="/training">Képzés</Link>
        </li>
        <li>
          <Link to="/contact">Kapcsolat</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
