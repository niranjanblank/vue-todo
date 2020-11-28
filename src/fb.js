 import firebase from 'firebase/app'
 import 'firebase/firestore'
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC8q4tM_P61K2dnWaE5k-1sCgLrE5p4G7A",
    authDomain: "vuepractice-f4374.firebaseapp.com",
    databaseURL: "https://vuepractice-f4374.firebaseio.com",
    projectId: "vuepractice-f4374",
    storageBucket: "vuepractice-f4374.appspot.com",
    messagingSenderId: "530283523804",
    appId: "1:530283523804:web:6170552fab4bcc3fc48e19",
    measurementId: "G-1NB1JDJ9GC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const db = firebase.firestore()

  db.settings({ timestampsInSnapshots: true})

  export default db