import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCR0H-xku4FjN539bsV6bhRk0AJBxk3Ylo",
  authDomain: "asserter-7b032.firebaseapp.com",
  projectId: "asserter-7b032",
  storageBucket: "asserter-7b032.appspot.com",
  messagingSenderId: "1023599666749",
  appId: "1:1023599666749:web:b3cd9ec6faae8eff34ec54",
  measurementId: "G-W2CLNB36HD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
