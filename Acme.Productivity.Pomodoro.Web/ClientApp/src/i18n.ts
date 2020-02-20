import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        fr: {
            translations: {
                Home: "Accueil",
                Title: "Pomodoro Connect !",
                Logout: "Se déconnecter"
            },
        },
    },
    fallbackLng: "fr",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;