import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Lista from './components/lista.js';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from "./locals/es";
import localeEnMessages from "./locals/en.json";
import {IntlProvider} from 'react-intl';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const navLanguage = navigator.language.split("-")[0];
const localeMsg = navLanguage === "es" ? localeEsMessages : localeEnMessages;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={navLanguage} messages={localeMsg}>
		<Lista language={navLanguage}/>
	</IntlProvider>, document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.register();
