// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCN8gVgVD7b8GAtPhllwP3wskdCIShrPY",
  authDomain: "precisely-project.firebaseapp.com",
  projectId: "precisely-project",
  storageBucket: "precisely-project.appspot.com",
  messagingSenderId: "259062898934",
  appId: "1:259062898934:web:8eee8809228a283c0d4cd7",
  measurementId: "G-XL67789DHD"
};

import { getAuth, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);