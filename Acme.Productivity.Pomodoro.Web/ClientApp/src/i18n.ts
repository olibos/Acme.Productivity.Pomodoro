import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Trans } from "react-i18next";
import * as React from "react";

i18n.use(LanguageDetector).init({
    resources: {
        fr: {
            translations:
                {
                    "Home": "Accueil",
                    "Title": "Pomodoro Connect !",
                    "Logout": "Se déconnecter",
                },
            forms:
                {
                    "Email address": "Adresse e-mail",
                    "Enter email": "Entrez votre adresse e-mail",
                    "Password": "Mot de passe",
                    "Submit": "Envoyer"
                },
        },
    },
    fallbackLng: "fr",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ",",
    },

    react: {
        wait: true,
    },
});

export default i18n;