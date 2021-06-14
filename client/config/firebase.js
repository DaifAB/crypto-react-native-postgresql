import firebase from "firebase";
import config from "../config";

const firebaseConfig = {
  apiKey: "AIzaSyDpIqcnq1e-zrhPjtTdZ0lTVBR4igvhFuQ",
  authDomain: "crypto-79a11.firebaseapp.com",
  projectId: "crypto-79a11",
  storageBucket: "crypto-79a11.appspot.com",
  messagingSenderId: "760449874650",
  appId: "1:760449874650:web:96f2f2a38847babeadc3e3",
};

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
