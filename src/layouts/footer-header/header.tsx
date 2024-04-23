import React, {useEffect, useState} from "react";
import "../../css/footer-header/header.css";
import {NavLink} from "react-router-dom";
import stalownia from "../../images/stalownia.png";

import {Dropdown} from "react-bootstrap";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
export const Navbar = () => {
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

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand">
          <NavLink className="navbar-brand" to="/">
            <img className={"icon"} src={stalownia} alt="Logo" />
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
            <li className="nav-item">
              <Dropdown drop={dropEnd ? "end" : undefined}>
                <Dropdown.Toggle className='dropdown-toggle ' >
                  {t("header.aboutUs") }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/">{t("header.mainPage") }</Dropdown.Item>
                  <Dropdown.Item href="/action-2">{t("header.aboutCompany") }</Dropdown.Item>
                  <Dropdown.Item href="/action-3">{t("header.whyUs") }</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown drop={dropEnd ? "end" : undefined}>
                <Dropdown.Toggle className='dropdown-toggle' >
                  {t("header.realizations") }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">{t("header.ourProducts") }</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">{t("header.specialOrders") }</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown drop={dropEnd ? "end" : undefined}>
                <Dropdown.Toggle className='dropdown-toggle ' >
                  {t("header.offer") }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">{t("header.personalizedContainers") }</Dropdown.Item>
                  <Dropdown.Item href="gitterbox">{t("header.gitterboxContainers") }</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">{t("header.specialContainers") }</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">{t("header.customMadeContainers") }</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown drop={dropEnd ? "end" : undefined}>
                <Dropdown.Toggle className='dropdown-toggle ' >
                  {t("header.contact") }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/kontakt">{t("header.contactInfo") }</Dropdown.Item>
                  <Dropdown.Item href="/formularz">{t("header.contactForm") }</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown drop={dropEnd ? "end" : undefined}>
                <Dropdown.Toggle className="dropdown-toggle ">
                  {i18next.language.toUpperCase()}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLanguageChange("pl")}>PL</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange("en")}>ENG</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange("de")}>DE</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange("fr")}>FR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};
