

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW9nsGBIS_9vm2hVIibB7Vo5hFknUmGGs",
  authDomain: "fir-104b6.firebaseapp.com",
  projectId: "fir-104b6",
  storageBucket: "fir-104b6.appspot.com",
  messagingSenderId: "48431238523",
  appId: "1:48431238523:web:ace3bea862895604c201de",
  measurementId: "G-PFGWNGQB0R"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
