import "./css/universal-components/default-page.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layouts/steelworks/footer-header/header";
import {MainPage} from "./layouts/steelworks/main-page/main-page";
import ContactForm from "./layouts/steelworks/contact/contact-form";
import ContactInfo from "./layouts/steelworks/contact/contact-info";
import Footer from "./layouts/steelworks/footer-header/footer";
import GitterboxContainers from "./layouts/steelworks/products/gitterbox-containers";
import GlobalMainPage from "./layouts/global-main-page/global-main-page";

export const App = () => {
  return (
          <div className='background'>
          <div className='blocking-div'></div>
          <div className="main-content">
              <Navbar/>
              <Routes>

                  <Route path="/" element={<GlobalMainPage/>}/>
                  <Route path="/automotive" element={<MainPage/>}/>
                  <Route path="/hotel" element={<MainPage/>}/>
                  <Route path="/automotive/kontakt" element={<ContactInfo/>}/>
                  <Route path="/automotive/formularz" element={<ContactForm/>}/>
                  <Route path="/automotive/gitterbox" element={<GitterboxContainers/>}/>

              </Routes>
              <Footer/>
          </div>
              <div className='blocking-div'></div>
      </div>
  );
};
