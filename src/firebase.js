
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBXzbpGacQ2gIltpmS-u68uQU5AoOmyxU",
    authDomain: "facebook-messenger-clone-6886d.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-6886d.firebaseio.com",
    projectId: "facebook-messenger-clone-6886d",
    storageBucket: "facebook-messenger-clone-6886d.appspot.com",
    messagingSenderId: "601647754912",
    appId: "1:601647754912:web:e1221602f6644f3992a3c5",
    measurementId: "G-825M18S7EE"
  });

  const db = firebaseApp.firestore();

  export default db;