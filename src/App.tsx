import "./css/universal-components/default-page.css";
import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./layouts/steelworks/footer-header/header";
import {MainPage} from "./layouts/steelworks/main-page/main-page";
import ContactForm from "./layouts/steelworks/contact/contact-form";
import ContactInfo from "./layouts/steelworks/contact/contact-info";
import Footer from "./layouts/steelworks/footer-header/footer";
import GitterboxContainers from "./layouts/steelworks/products/gitterbox-containers";
import GlobalMainPage from "./layouts/global-main-page/global-main-page";
import {HotelMainPage} from "./layouts/hotel-industry/main-page/main-page";
import {HotelNavbar} from "./layouts/hotel-industry/footer-header/header";

export const App = () => {
    const location = useLocation();

    return (
        <div className='background'>
            <div className='blocking-div'></div>
            <div className="main-content">
                {location.pathname.startsWith("/hotel") ? <HotelNavbar /> : <Navbar />}
                <Routes>
                    <Route path="/hotel" element={<HotelMainPage />} />
                    <Route path="/hotel/kontakt" element={<ContactInfo />} />
                    <Route path="/hotel/formularz" element={<ContactForm />} />
                    <Route path="/" element={<GlobalMainPage />} />
                    <Route path="/automotive" element={<MainPage />} />
                    <Route path="/automotive/kontakt" element={<ContactInfo />} />
                    <Route path="/automotive/formularz" element={<ContactForm />} />
                    <Route path="/automotive/gitterbox" element={<GitterboxContainers />} />
                </Routes>
                <Footer />
            </div>
            <div className='blocking-div'></div>
        </div>
    );
};
