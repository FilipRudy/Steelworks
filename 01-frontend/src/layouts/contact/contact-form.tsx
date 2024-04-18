import React, {useEffect, useState} from "react";
import "../../css/contact/contact-form.css";
import Button from "../universal-components/button";
import {useTranslation} from "react-i18next";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        topic: "",
        message: ""
    });

    const { t, i18n } = useTranslation("global");

    useEffect(() => {
        const storedLang = window.localStorage.getItem("lang");
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        }
    }, [i18n]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            topic: "",
            message: ""
        });
    };

    return (
        <div>
            <div className="contact-form-container">
                <h1 className="text-center clash-font"> {t("contact-form.header")}
                </h1>
                <div className={"title-break"}></div>

                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="input-group">
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder={t("contact-form.nameSurname") }
                                className="form-control rounded-input work-sans"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={t("contact-form.phone") }
                                className="form-control rounded-input work-sans"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t("contact-form.email") }
                                className="form-control rounded-input work-sans"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                placeholder={t("contact-form.topic") }
                                className="form-control rounded-input work-sans"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t("contact-form.message") }
                            className="form-control message-input rounded-input work-sans"
                            rows={5}
                        ></textarea>
                    </div>
                </form>
            </div>
            <div className="center-button"> {/* Center the button */}
                <Button message={t("contact-form.send") } onClick={handleSubmit}/>
            </div>
            <div className={"section-break"}></div>
        </div>
    );
};

export default ContactForm;
