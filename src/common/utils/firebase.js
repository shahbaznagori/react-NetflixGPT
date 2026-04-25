// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth ,onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIYsXgCacBkeZ9FPZeo0rJVOGbCqTsivg",
  authDomain: "netflixgpt-f9ef7.firebaseapp.com",
  projectId: "netflixgpt-f9ef7",
  storageBucket: "netflixgpt-f9ef7.firebasestorage.app",
  messagingSenderId: "293706721024",
  appId: "1:293706721024:web:30634218bcfe6e7a04b5e5",
  measurementId: "G-D2N8KLY0DG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);
