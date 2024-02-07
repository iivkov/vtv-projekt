import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HamburgerLogo } from '../assets/hamburger_logo.svg';
import CompanyLogo from '../assets/VTV-100-87-white.png';
import '../App.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navElements = document.querySelector('.nav_elements');
      const menuIcon = document.querySelector('.menu_icon');

      if (navElements && !navElements.contains(event.target) && !menuIcon.contains(event.target)) {
        setShowNavbar(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
  <nav className="navbar">
    <div className="navbar_container">
      <div className="logo">
        <a href="/" rel="noopener noreferrer">
          <div><img src={CompanyLogo} alt="Logotip" /></div>
        </a>
      </div>
    <div className="menu_icon" onClick={handleShowNavbar}>
        <HamburgerLogo />
    </div>
    <div className={`nav_elements  ${showNavbar && 'active'}`}>
      <ul>
        <li>
          <NavLink to="/">Početna</NavLink>
        </li>
        {/* <li>
          <NavLink to="/o-nama">O nama</NavLink>
        </li> */}
        <li>
          <NavLink to="/usluge">Usluge</NavLink>
        </li>
        <li>
          <NavLink to="/prometna-oprema">Prometna oprema</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar