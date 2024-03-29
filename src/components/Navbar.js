import "./NavbarStyles.css";
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=100) {
      setColor(true);
    }
    else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className= {color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 id = "logo">Kartik Mahajan</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleclick}>
        {click ?
          (<FaTimes size={20} style={{color:"#fff"}}/>)
          :
          (<FaBars size={20} style={{color:"#fff"}}/>)
        }
      </div>
    </div>
  );
};

export default Navbar;
