import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./App";
import { BrowserRouter } from "react-router-dom";

import global_en from "../src/translations/en/global.json";
import global_pl from "../src/translations/pl/global.json";
import global_de from "../src/translations/de/global.json";
import global_fr from "../src/translations/fr/global.json";
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

i18next.init({
    interpolation: {escapeValue: true},
    lng: "pl",
    resources: {
        en: {
            global: global_en
        },
        pl: {
            global: global_pl
        },
        de: {
            global: global_de
        },
        fr: {
            global: global_fr
        }
    }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
