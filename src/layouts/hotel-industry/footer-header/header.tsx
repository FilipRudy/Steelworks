import React, { useEffect, useState } from "react";
import "../../../css/steelworks/footer-header/header.css";
import { NavLink } from "react-router-dom";
import stalownia from "../../../images/stalownia.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const HotelNavbar = () => {
  const [t, i18n] = useTranslation("global");
  const [dropEnd, setDropEnd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setDropEnd(true);
      } else {
        setDropEnd(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedLang = window.localStorage.getItem("lang");
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  const handleLanguageChange = (lang: string) => {
    window.localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  };

  const handleDropdownClick = (event: { preventDefault: () => void; currentTarget: { nextElementSibling: any; }; }) => {
    if (window.innerWidth <= 991) {
      event.preventDefault();
      const menu = event.currentTarget.nextElementSibling;
      if (menu) {
        const isVisible = menu.style.visibility === "visible";
        menu.style.opacity = isVisible ? "0" : "1";
        menu.style.visibility = isVisible ? "hidden" : "visible";
        menu.style.transform = isVisible ? "translateY(-10px)" : "translateY(0)";
      }
    }
  };

  return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">
            <NavLink className="navbar-brand" to="/">
              <img className="icon" src={stalownia} alt="Logo" />
            </NavLink>
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item dropdown-hover">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={handleDropdownClick}>
                  {t("header.contact")}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/hotel/kontakt">{t("header.contactInfo")}</NavLink>
                  <NavLink className="dropdown-item" to="/hotel/formularz">{t("header.contactForm")}</NavLink>
                </div>
              </li>
              <li className="nav-item dropdown-hover">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={handleDropdownClick}>
                  {i18next.language.toUpperCase()}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" onClick={() => handleLanguageChange("pl")}>PL</a>
                  <a className="dropdown-item" onClick={() => handleLanguageChange("en")}>ENG</a>
                  <a className="dropdown-item" onClick={() => handleLanguageChange("de")}>DE</a>
                  <a className="dropdown-item" onClick={() => handleLanguageChange("fr")}>FR</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};
