import "./css/universal-components/default-page.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layouts/footer-header/header";
import {MainPage} from "./layouts/main-page/main-page";
import ContactForm from "./layouts/contact/contact-form";
import ContactInfo from "./layouts/contact/contact-info";
import Footer from "./layouts/footer-header/footer";
import GitterboxContainers from "./layouts/products/gitterbox-containers";

export const App = () => {
  return (
          <div className='background'>
          <div className='blocking-div'></div>
          <div className="main-content">
              <Navbar/>
              <Routes>

                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/kontakt" element={<ContactInfo/>}/>
                  <Route path="/formularz" element={<ContactForm/>}/>
                  <Route path="/gitterbox" element={<GitterboxContainers/>}/>

              </Routes>
              <Footer/>
          </div>
              <div className='blocking-div'></div>
      </div>
  );
};
