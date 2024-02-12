// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOOmQc--NHLzRpSD0vqc7PKx1Iu5Y5nLY",
  authDomain: "fir-authentication-b70e6.firebaseapp.com",
  projectId: "fir-authentication-b70e6",
  storageBucket: "fir-authentication-b70e6.appspot.com",
  messagingSenderId: "47248796132",
  appId: "1:47248796132:web:094c81aac0f39528573ff1",
  measurementId: "G-YZK5N4SYBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
