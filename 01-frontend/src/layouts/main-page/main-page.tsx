import React, {useEffect} from "react";
import "../../css/main-page/main-page.css";
import forkImage from "../../images/fork.jpg";
import weldImage from "../../images/spaw.jpg";
import ProductCard from "../universal-components/product-card";
import InfoCard from "../universal-components/info-card";
import Button from "../universal-components/button";
import {useTranslation} from "react-i18next";

export const MainPage = () => {
    const { t, i18n } = useTranslation("global");

    useEffect(() => {
        const storedLang = window.localStorage.getItem("lang");
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        }
    }, [i18n]);

    return (
        <div className='main-page'>

            <div className="hero-section">
                <div className="hero-content">

                    <h4 className="clash-medium-font text-left hero-title-upper">
                        {t("home.heroTop1") }
                        <span className="bold-text">{t("home.heroTop2") }</span>
                    </h4>

                    <h1 className="clash-font text-left hero-title">
                        {t("home.hero") }
                    </h1>
                    <p className="hero-subtitle text-left work-sans">
                        {t("home.heroBottom") }
                    </p>
                </div>
                <div className="hero-image-container">
                    {/* SVG Blob */}
                    <svg className="blob-shape" viewBox="0 0 813 556" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="pattern0" patternContentUnits="userSpaceOnUse" width="100%" height="100%">
                                <image href={weldImage}/>
                            </pattern>
                        </defs>
                        <path opacity="0.82"
                              d="M284.608 117.746L69.5191 244.356C60.8798 249.441 52.8085 255.435 45.4427 262.236C-42.8424 343.744 5.02786 491.114 124.41 504.739C357.009 531.286 599.64 557.689 625.084 555.915C672.188 552.632 780.86 536.579 806.065 520.891C817.739 513.625 813.079 492.964 803.825 472.062L803.011 470.225C790.754 442.552 778.374 414.601 773.877 384.684L739.11 153.371C735.575 129.855 727.405 107.276 715.073 86.9432C674.324 19.7586 594.624 -13.1266 518.355 5.77455L438.825 25.4838C413.646 31.7237 389.873 42.6629 368.754 57.7264L284.608 117.746Z"
                              fill={"url(#pattern0)"}/>
                    </svg>
                    {/* End of SVG Blob */}
                </div>
            </div>

            <div className={"section-break"}></div>


            <div className={"why-us"}>
                <h1 className="clash-font text-center">
                    {t("home.whyUs") }
                </h1>
                <div className="info-cards work-sans">
                    <InfoCard
                        message={t("home.infoCardContent1")}
                        title={t("home.infoCardHeader1")}/>
                    <InfoCard
                        message={t("home.infoCardContent2")}
                        title={t("home.infoCardHeader2")}/>
                    <InfoCard
                        message={t("home.infoCardContent3")}
                        title={t("home.infoCardHeader3")}/>

                </div>
            </div>

            <div className={"section-break"}></div>

            <div className={"our-offer"}>
                <h1 className="clash-font text-center">
                    {t("header.offer")}
                </h1>
                <div className="product-cards work-sans">
                    <ProductCard message={t("home.productCardTop1")} path={"/"} imagePath={forkImage} bottomMessage={t("home.productCardBottom1")}/>
                    <ProductCard message={t("home.productCardTop2")} path={"/"} imagePath={weldImage} bottomMessage={t("home.productCardBottom2")}/>
                    <ProductCard message={t("home.productCardTop3")} path={"/"} imagePath={weldImage} bottomMessage={t("home.productCardBottom3")}/>
                    <ProductCard message={t("home.productCardTop4")} path={"/"} imagePath={weldImage} bottomMessage={t("home.productCardBottom4")}/>
                    <ProductCard message={t("home.productCardTop5")} path={"/"} imagePath={weldImage} bottomMessage={t("home.productCardBottom5")}/>
                </div>
            </div>

            <div className={"section-break"}></div>

            <div className={"contact-us"}>
                <div className=" contact-title">
                    <h1 className="clash-font text-center contact-title">
                        {t("home.contactHeader")}
                    </h1>
                </div>

                <h3 className="work-sans text-center contact-message">
                    {t("home.contactContent")} </h3>
                <div className={"contact-us-button"}>

                    <Button message={t("home.contactButton")} onClick={() => { window.location.href = "/kontakt"; }} />
                </div>
            </div>

            <div className={"section-break"}></div>

        </div>
    );
};
