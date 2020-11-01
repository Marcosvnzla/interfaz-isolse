import firebase from 'firebase/app';
import 'firebase/database';

let config = {
  apiKey: "AIzaSyA1Bc315cpIRMB6pCy12Wuq8e3JrtOZOKE",
  authDomain: "maestria1-24022020.firebaseapp.com",
  databaseURL: "https://maestria1-24022020.firebaseio.com/",
  projectId: "maestria1-24022020",
  storageBucket: "maestria1-24022020.appspot.com",
  messagingSenderId: "120765289928",
  appId: "1:120765289928:web:dd3f622bb179d1125f1cfd"
};

firebase.initializeApp(config);

export default firebase;