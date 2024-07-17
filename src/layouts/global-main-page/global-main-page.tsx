import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import plch2 from "../../images/plch2.jpg";
import plch4 from "../../images/plch4.jpg";
import "../../css/global-main-page/global-main-page.css";
import { Link } from "react-router-dom";

const GlobalMainPage: React.FC = () => {
    const { t, i18n } = useTranslation("global");

    useEffect(() => {
        const storedLang = window.localStorage.getItem("lang");
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        }
    }, [i18n]);

    return (
        <div className="main-container">

            <div className="hero-section-global">
                <div className="hero-content-global">
                    <h1 className="clash-font text-center hero-title-global">
                        {t("main-page-global.hero")}
                    </h1>
                    <p className="hero-subtitle-global text-center work-sans">
                        {t("main-page-global.hero-bottom")}
                    </p>
                </div>
            </div>

            <div className="image-container">
                <Link to="/automotive" className="image-block" data-message={t("main-page-global.automotive")}>
                    <img className="image" src={plch2} alt="Image 1" />
                </Link>
                <Link to="/hotel" className="image-block" data-message={t("main-page-global.hotel-industry")}>
                    <img className="image" src={plch4} alt="Image 2" />
                </Link>
            </div>

            <div className={"section-break"}></div>
        </div>
    );
};

export default GlobalMainPage;
