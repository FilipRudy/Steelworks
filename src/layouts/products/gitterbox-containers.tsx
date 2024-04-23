import React from "react";
import "../../css/products/gitterbox-containers.css";
import plch2 from "../../images/plch2.jpg";
import plch3 from "../../images/plch3.jpg";
import Button from "../universal-components/button";

const GitterboxContainers: React.FC = () => {
    return (
        <div className="product-container">
            <div className="product-section product-section-left work-sans">
                <img src={plch2} alt="Product Image"/>
                <p>Nasz pojemnik Gitterbox to doskonałe rozwiązanie dla firm poszukujących wytrzymałego, uniwersalnego i
                    wszechstronnego narzędzia do przechowywania i transportu różnorodnych towarów. Zaprojektowany z
                    myślą o maksymalnej wytrzymałości i trwałości, pojemnik ten jest idealnym rozwiązaniem dla branż
                    logistycznych, magazynowych oraz produkcji. Jego solidna konstrukcja, wykonana z wysokiej jakości
                    materiałów, gwarantuje niezawodność i bezpieczeństwo podczas przechowywania oraz transportu nawet
                    najbardziej wymagających produktów. </p>
            </div>
            <div className="product-section product-section-right work-sans">
                <img className="hidden-product" src={plch3} alt="Product Image"/>
                <p>Dzięki swojej modułowej budowie pojemnik ten jest łatwy w składaniu oraz przechowywaniu, co pozwala
                    zaoszczędzić cenny czas i miejsce w magazynach oraz na pojazdach transportowych. Dodatkowo, nasz
                    pojemnik Gitterbox spełnia najwyższe standardy jakości oraz jest przyjazny dla środowiska, co czyni
                    go idealnym wyborem dla firm dążących do zrównoważonego rozwoju i ochrony środowiska naturalnego.
                    Dzięki swojej elastycznej konstrukcji, pojemnik ten może być wykorzystywany w różnorodnych branżach,
                    takich jak produkcja, handel, rolnictwo czy budownictwo, co czyni go niezastąpionym narzędziem dla
                    szerokiego spektrum przedsiębiorstw.</p>
                <img className="product-to-hide" src={plch3} alt="Product Image"/>
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
                        window.location.href = "/kontakt";
                    }}/>
                </div>
            </div>
            <div className={"section-break"}></div>

        </div>

    );
};

export default GitterboxContainers;
