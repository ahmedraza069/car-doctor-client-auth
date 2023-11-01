// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPrpKnD34-BxwrojWhrW7bpTvU2izOKFE",
  authDomain: "car-doctor-auth-2fa4d.firebaseapp.com",
  projectId: "car-doctor-auth-2fa4d",
  storageBucket: "car-doctor-auth-2fa4d.appspot.com",
  messagingSenderId: "1077595093815",
  appId: "1:1077595093815:web:e9cd61f22232a8ddb278b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;