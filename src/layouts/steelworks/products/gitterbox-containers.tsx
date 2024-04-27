import React from "react";
import "../../../css/steelworks/products/gitterbox-containers.css";
import plch2 from "../../../images/plch2.jpg";
import plch3 from "../../../images/plch3.jpg";
import Button from "../universal-components/button";
import { Carousel } from "react-bootstrap";

const GitterboxContainers: React.FC = () => {
    return (
        <div className="product-container">
            <div className="product-section product-section-left work-sans">
                <Carousel indicators style={{ width: "100%", height: "auto" }}>
                    <Carousel.Item>
                        <img className="d-block  rounded" src={plch2} alt="First slide" style={{ objectFit: "cover",  borderRadius: "10px" }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block  rounded" src={plch3} alt="Second slide" style={{ objectFit: "cover", borderRadius: "10px" }} />
                    </Carousel.Item>
                </Carousel>
                <p>Nasz pojemnik Gitterbox to doskonałe rozwiązanie dla firm poszukujących wytrzymałego, uniwersalnego i
                    wszechstronnego narzędzia do przechowywania i transportu różnorodnych towarów. Zaprojektowany z
                    myślą o maksymalnej wytrzymałości i trwałości, pojemnik ten jest idealnym rozwiązaniem dla branż
                    logistycznych, magazynowych oraz produkcji. Jego solidna konstrukcja, wykonana z wysokiej jakości
                    materiałów, gwarantuje niezawodność i bezpieczeństwo podczas przechowywania oraz transportu nawet
                    najbardziej wymagających produktów. </p>
            </div>

            <div className={"section-break"}></div>


            <div className={"contact-us"}>
                <div className=" contact-title">
                    <h1 className="clash-font text-center contact-title">
                        Zainteresowany?
                    </h1>
                </div>

                <h3 className="work-sans text-center contact-message">
                    Skontaktuj się z nami, i odpowiemy najszybciej jak to jest możliwe </h3>
                <div className={"contact-us-button"}>

                    <Button message="kontakt" onClick={() => {
                        window.location.href = "/automotive/kontakt";
                    }}/>
                </div>
            </div>
            <div className={"section-break"}></div>

        </div>

    );
};

export default GitterboxContainers;
