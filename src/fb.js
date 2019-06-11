import firebase from 'firebase/app'
import 'firebase/firestore'


//Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtLYu5VxVcNjEXu1rr343vo5IHduWr670",
    authDomain: "vue-js-project-playlist.firebaseapp.com",
    databaseURL: "https://vue-js-project-playlist.firebaseio.com",
    projectId: "vue-js-project-playlist",
    storageBucket: "vue-js-project-playlist.appspot.com",
    messagingSenderId: "53654972471",
    appId: "1:53654972471:web:531388754d2a8337"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


  export default db;