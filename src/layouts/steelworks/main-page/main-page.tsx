import React, { useEffect } from "react";
import "../../../css/steelworks/main-page/main-page.css";
import forkImage from "../../../images/fork.jpg";
import weldImage from "../../../images/spaw.jpg";
import plch from "../../../images/plch.jpg";
import plch1 from "../../../images/plch1.jpg";
import plch2 from "../../../images/plch2.jpg";
import ProductCard from "../universal-components/product-card";
import InfoCard from "../universal-components/info-card";
import Button from "../universal-components/button";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-bootstrap";
import plch3 from "../../../images/plch3.jpg";

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
                    </h4>
                    <h1 className="clash-font text-left hero-title">
                        {t("home.hero")}
                    </h1>
                    <p className="hero-subtitle text-left work-sans">
                        {t("home.heroBottom")}
                    </p>
                    <p className="hero-subtitle text-left work-sans">
                        {t("home.heroBottom1")}
                    </p>
                    <p className="hero-subtitle text-left work-sans">
                        {t("home.heroBottom2")}
                    </p>
                    <p className="hero-subtitle text-left work-sans">
                        {t("home.heroBottom3")}
                    </p>
                    <p className="hero-subtitle text-left work-sans">
                        {t("home.heroBottom4")}
                    </p>
                </div>
                <div className="hero-carousel product-section product-section-main">
                    <Carousel indicators style={{ width: "100%", height: "auto" }}>
                        <Carousel.Item className={"carousel-item-main"}>
                            <img className="d-block rounded" src={plch2} alt="First slide"
                                 style={{ objectFit: "cover", borderRadius: "10px" }} />
                        </Carousel.Item>
                        <Carousel.Item className={"carousel-item-main"}>
                            <img className="d-block rounded" src={plch3} alt="Second slide"
                                 style={{ objectFit: "cover", borderRadius: "10px" }} />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className={"section-break"}></div>
            <div className={"our-offer"}>
                <h1 className="clash-font text-center">
                    {t("header.offer")}
                </h1>
                <div className="product-cards work-sans">
                    <ProductCard message={t("home.productCardTop1")} path={"/"} imagePath={forkImage}
                                 bottomMessage={t("home.productCardBottom1")} />
                    <ProductCard message={t("home.productCardTop2")} path={"/"} imagePath={weldImage}
                                 bottomMessage={t("home.productCardBottom2")} />
                    <ProductCard message={t("home.productCardTop3")} path={"/"} imagePath={plch}
                                 bottomMessage={t("home.productCardBottom3")} />
                    <ProductCard message={t("home.productCardTop4")} path={"/"} imagePath={plch1}
                                 bottomMessage={t("home.productCardBottom4")} />
                    <ProductCard message={t("home.productCardTop5")} path={"/"} imagePath={plch2}
                                 bottomMessage={t("home.productCardBottom5")} />
                    <ProductCard message={t("home.productCardTop6")} path={"/"} imagePath={plch2}
                                 bottomMessage={t("home.productCardBottom6")} />
                    <ProductCard message={t("home.productCardTop7")} path={"/"} imagePath={plch2}
                                 bottomMessage={t("home.productCardBottom7")} />
                    <ProductCard message={t("home.productCardTop8")} path={"/"} imagePath={plch2}
                                 bottomMessage={t("home.productCardBottom8")} />
                </div>
            </div>
            <div className={"section-break"}></div>
            <div className={"why-us"}>
                <h1 className="clash-font text-center">
                    {t("home.whyUs")}
                </h1>
                <div className="info-cards work-sans">
                    <InfoCard
                        message={t("home.infoCardContent1")}
                        title={t("home.infoCardHeader1")} />
                    <InfoCard
                        message={t("home.infoCardContent2")}
                        title={t("home.infoCardHeader2")} />
                    <InfoCard
                        message={t("home.infoCardContent3")}
                        title={t("home.infoCardHeader3")} />
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
                    {t("home.contactContent")}
                </h3>
                <div className={"contact-us-button"}>
                    <Button message={t("home.contactButton")} onClick={() => {
                        window.location.href = "/automotive/kontakt";
                    }} />
                </div>
            </div>
            <div className={"section-break"}></div>
        </div>
    );
};
