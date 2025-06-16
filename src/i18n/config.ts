import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          common: {
            search: 'Search',
            book: 'Book Now',
            explore: 'Explore More',
            loading: 'Loading...',
          },
          nav: {
            home: 'Home',
            delhi: 'Delhi',
            noida: 'Noida',
            tours: 'Tours',
            about: 'About',
            contact: 'Contact',
          },
          booking: {
            checkIn: 'Check-in Date',
            checkOut: 'Check-out Date',
            guests: 'Guests',
            roomType: 'Room Type',
            search: 'Search Hotels',
          },
        },
      },
      hi: {
        translation: {
          common: {
            search: 'खोजें',
            book: 'अभी बुक करें',
            explore: 'और जानें',
            loading: 'लोड हो रहा है...',
          },
          nav: {
            home: 'होम',
            delhi: 'दिल्ली',
            noida: 'नोएडा',
            tours: 'टूर्स',
            about: 'हमारे बारे में',
            contact: 'संपर्क करें',
          },
          booking: {
            checkIn: 'चेक-इन तिथि',
            checkOut: 'चेक-आउट तिथि',
            guests: 'मेहमान',
            roomType: 'कमरे का प्रकार',
            search: 'होटल खोजें',
          },
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;