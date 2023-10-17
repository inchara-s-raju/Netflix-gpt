// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8uuHT_EGQrE44U1YhEFXmmntZpKLFKBg',
  authDomain: 'netflixgpt-70df7.firebaseapp.com',
  projectId: 'netflixgpt-70df7',
  storageBucket: 'netflixgpt-70df7.appspot.com',
  messagingSenderId: '1079341349414',
  appId: '1:1079341349414:web:650f538dd8c021986f84e7',
  measurementId: 'G-PEPV9JEZM9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
