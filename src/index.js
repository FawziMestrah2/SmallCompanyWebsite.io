import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'aos/dist/aos.css';
import AOS from 'aos';
import gloabal_en from "./Resources/English/en.json"
import i18next from "i18next"
import { I18nextProvider } from 'react-i18next';
// Initialize AOS
AOS.init();

i18next.init({
interpolation:{escapeValue:false},
lng:"en",
resource:{
  en:{
    global:gloabal_en,
  }
}
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}></I18nextProvider>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
