import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDz6C0Oq-PtAbkjnB7JAhJRW1Be5-XOrmM",
  authDomain: "coup-dc26b.firebaseapp.com",
  databaseURL: "https://coup-dc26b.firebaseio.com",
  projectId: "coup-dc26b",
  storageBucket: "coup-dc26b.appspot.com",
  messagingSenderId: "457763320714",
  appId: "1:457763320714:web:992598453ed003f6bf0e73",
  measurementId: "G-FW11G1ZPZM"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
