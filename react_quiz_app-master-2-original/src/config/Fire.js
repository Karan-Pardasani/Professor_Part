import * as firebase from 'firebase';
import 'firebase/firestore';
  const config = {
    apiKey: "AIzaSyCtOHG2K2d4_cKQVBjItcMlwM2dE-rh3p8",
    authDomain: "coursegame-6af5a.firebaseapp.com",
    databaseURL: "https://coursegame-6af5a.firebaseio.com",
    projectId: "coursegame-6af5a",
    storageBucket: "coursegame-6af5a.appspot.com",
    messagingSenderId: "2524198740"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
//export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
export default firebase;