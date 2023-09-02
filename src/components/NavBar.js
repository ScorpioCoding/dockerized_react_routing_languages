//
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../css/NavBar.scss";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <Link to='/' className='title'>
          WebsiteName
        </Link>
        <div
          className='menu'
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={menuOpen ? "open" : "closed"}>
          <div className='list'>
            <ul className='list_links'>
              <li>
                <NavLink
                  to='/'
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
