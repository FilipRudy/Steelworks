import React, {useEffect} from "react";
import "../../css/contact/contact-info.css";
import {useTranslation} from "react-i18next"; // Define your own CSS for styling

const ContactInfo = () => {
    const { t, i18n } = useTranslation("global");

    useEffect(() => {
        const storedLang = window.localStorage.getItem("lang");
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        }
    }, [i18n]);

    return (
        <div>
            <div>
                <h1 className="text-center clash-font">{t("contact-info.header")}</h1>

            </div>
            <div className="contact-info-container">

                <div className="contact-info-card">
                    <h2 className={"clash-font"}>{t("contact-info.address")}</h2>
                    <p className={"work-sans"}>{t("footer.country")}</p>
                    <p className={"work-sans"}>{t("contact-info.street")}</p>
                    <p className={"work-sans"}>Katowice, 40-753</p>
                    <h2 className={"clash-font"}>{t("contact-info.phoneNumbers")}</h2>
                    <p className={"work-sans"}>{"Damian Wisłobocki: +48 533 533 551"}</p>
                    <p className={"work-sans"}>{"Szymon Wisłobocki: +48 533 533 557"}</p>
                    <h2 className={"clash-font"}>{t("contact-info.email")}</h2>
                    <p className={"work-sans"}>{t("contact-info.officeEmail")}</p>
                    <p className={"work-sans"}>{t("contact-info.accountingDepartmentEmail")}</p>
                    <h2 className={"clash-font"}>{t("contact-info.companyInfo")}</h2>
                    <p className={"work-sans"}>NIP 6343009179</p>
                    <p className={"work-sans"}>REGON 521825875</p>
                </div>
                <div className="map-card">
                    {/* Embed Google Maps or use iframe */}
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.123010295421!2d19.00324861534105!3d50.24457527944598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164411ca2c43b5%3A0xc6ee8a2b3dd5d7e4!2sUl.%20Kijowska%2016%2C%2040-753%20Katowice!5e0!3m2!1sen!2spl!4v1649931391114!5m2!1sen!2spl"
                        width="600"
                        height="450"
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className={"section-break"}></div>
        </div>

    );
};

export default ContactInfo;
