import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCz4WNQH-GI3i1coxZAbLQ0A2EfrwQZqYg",
    authDomain: "net-ninja-marioplan-d7a85.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-d7a85.firebaseio.com",
    projectId: "net-ninja-marioplan-d7a85",
    storageBucket: "net-ninja-marioplan-d7a85.appspot.com",
    messagingSenderId: "76276232336"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;

  