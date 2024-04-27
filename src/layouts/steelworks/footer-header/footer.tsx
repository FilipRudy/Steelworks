import React, {useEffect} from "react";
import "../../../css/steelworks/footer-header/footer.css";
import stalownia from "../../../images/stalownia.png";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation("global");

    useEffect(() => {
        const storedLang = window.localStorage.getItem("lang");
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        }
    }, [i18n]);

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="icon-footer">
                    <img src={stalownia} alt="Logo" className="icon-footer"/>
                </div>
                <div className="line-vertical"></div>
                <div className="footer-text">

                    <div className="company-info footer-text work-sans">
                        <h5>Stalownia sp. z o.o.</h5>
                        <h6>NIP 521825875</h6>
                        <h6>REGON 521825875</h6>
                    </div>
                </div>
                <div className="line-vertical"></div>
                <div className="company-info footer-text work-sans">
                    <h5>                        {t("footer.country")}</h5>
                    <h6>Katowice 40-530</h6>
                    <h6>{t("footer.street")}</h6>
                </div>

                <div className="line-vertical"></div>
                <div className="footer-text">
                    <div className="company-info footer-text work-sans">
                        <h5>{t("contact-info.email")}</h5>
                        <h6>{t("contact-info.officeEmail")}<a href="mailto:biuro@stalownia.katowice.pl"> {"biuro@stalownia.katowice.pl"} </a></h6>
                        <h6>{t("contact-info.accountingDepartmentEmail")}<a href="mailto:ksiegowosc@stalownia.katowice.pl">  {"ksiegowosc@stalownia.katowice.pl"}</a></h6>
                    </div>
                </div>
                <div className="line-vertical"></div>
                <div className="footer-text">
                    <div className="company-info footer-text work-sans">
                        <h5>{t("contact-info.phoneNumbers")}</h5>
                        <h6>{"Damian Wisłobocki: "}<a href="tel:+48-533-533-551">{"+48 533 533 551"}</a></h6>
                        <h6>{"Szymon Wisłobocki: "}<a href="tel:+48-533-533-557">{"+48 533 533 557"}</a></h6>
                    </div>
                </div>
                <div className="line-vertical"></div>

            </div>
        </div>
    );
};

export default Footer;
