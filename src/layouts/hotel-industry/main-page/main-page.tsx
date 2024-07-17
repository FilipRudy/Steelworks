import React, { useEffect } from "react";
import "../../../css/hotel-industry/main-page/main-page.css";
import forkImage from "../../../images/fork.jpg";
import weldImage from "../../../images/spaw.jpg";
import plch from "../../../images/plch.jpg";
import plch1 from "../../../images/plch1.jpg";
import plch2 from "../../../images/plch2.jpg";
import InfoCard from "../universal-components/info-card";
import Button from "../universal-components/button";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-bootstrap";
import plch3 from "../../../images/plch3.jpg";
import ProductCardHotel from "../universal-components/product-card";

export const HotelMainPage = () => {
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
                        {t("home-hotel.hero")}
                    </h1>
                    <p className="hero-subtitle text-left work-sans">
                        {t("home-hotel.heroBottom")}
                    </p>
                </div>
                <div className="hero-carousel product-section product-section-left">
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
                <div className="product-cards-hotel work-sans">
                    <ProductCardHotel message={t("home-hotel.productCardTop1")} imagePath={forkImage}
                                 bottomMessage={t("home-hotel.productCardBottom1")} contentMessageTop={t("home-hotel.productCardContentTop1")} contentMessageBottom={t("home-hotel.productCardContentBottom1")} />
                    <ProductCardHotel message={t("home-hotel.productCardTop2")} imagePath={weldImage}
                                 bottomMessage={t("home-hotel.productCardBottom2")} contentMessageTop={t("home-hotel.productCardContentTop2")} />
                    <ProductCardHotel message={t("home-hotel.productCardTop3")} imagePath={plch}
                                 bottomMessage={t("home-hotel.productCardBottom3")} contentMessageTop={t("home-hotel.productCardContentTop3")} contentMessageBottom={t("home-hotel.productCardContentBottom3")}/>
                    <ProductCardHotel message={t("home-hotel.productCardTop4")} imagePath={plch1}
                                 bottomMessage={t("home-hotel.productCardBottom4")} contentMessageTop={t("home-hotel.productCardContentTop4")} contentMessageBottom={t("home-hotel.productCardContentBottom4")}/>
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
