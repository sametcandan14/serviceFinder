// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBK-TiwMEa3CtJUoQTxKft7xilVMpv8zA",
  authDomain: "servicefinder-9855e.firebaseapp.com",
  projectId: "servicefinder-9855e",
  storageBucket: "servicefinder-9855e.appspot.com",
  messagingSenderId: "744944227724",
  appId: "1:744944227724:web:1114853f859b5039ee32a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
