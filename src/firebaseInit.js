
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLM8-pb-mQpTEea5YF3SB2Pek3kkl7ShU",
  authDomain: "photofolio-8c415.firebaseapp.com",
  projectId: "photofolio-8c415",
  storageBucket: "photofolio-8c415.appspot.com",
  messagingSenderId: "812243011127",
  appId: "1:812243011127:web:adc0fa5bd097b48e0621b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
