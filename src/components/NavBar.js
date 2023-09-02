//
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "../css/NavBar.scss";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const lang = (code) => {
    i18next.changeLanguage(code);
  };
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
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  {t("about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  {t("contact")}
                </NavLink>
              </li>
            </ul>
            <ul className='list_langs'>
              <li>
                <Link
                  onClick={() => {
                    lang("en");
                  }}
                >
                  en
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    lang("fr");
                  }}
                >
                  fr
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    lang("nl");
                  }}
                >
                  nl
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
