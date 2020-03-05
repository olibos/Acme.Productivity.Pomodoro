import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
    resources: {
        fr: {
            translations:
                {
                    'Home': 'Accueil',
                    'Title': 'Pomodoro Connect !',
                    'Logout': 'Se déconnecter',
                },
            forms:
                {
                    'Email address': 'Adresse e-mail',
                    'Enter email': 'Entrez votre adresse e-mail',
                    'Password': 'Mot de passe',
                    'Submit': 'Envoyer',
                },
            validations:
                {
                    'FormatEmail': 'Veuillez entrer un e-mail',
                    'Required': 'Cette information est requise',
                },
            projects:
                {
                    list:
                        {
                            'title': 'Vos projets',
                            'no-items': 'Vous n\'avez pas encore de projets.'
                        },
                    new:
                        {
                            'title': 'Ajouter un nouveau projet'
                        }
                },
        },
    },
    fallbackLng: 'fr',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
    },

    react: {
        wait: true,
    },
});

export default i18n;