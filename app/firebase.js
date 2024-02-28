// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrElQT4dNDQhfHJxRPKLgejoMaykbvC7U",
  authDomain: "test-app-50379.firebaseapp.com",
  projectId: "test-app-50379",
  storageBucket: "test-app-50379.appspot.com",
  messagingSenderId: "673231017075",
  appId: "1:673231017075:web:adfcbb6059054e55968606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
