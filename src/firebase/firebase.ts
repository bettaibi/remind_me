import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const appConfig = firebase.initializeApp({
    apiKey: "AIzaSyB4j1J1g2w7gbgBGYGBAmwdrE7KZl8VYmc",
    authDomain: "remindme-de28f.firebaseapp.com",
    projectId: "remindme-de28f",
    storageBucket: "remindme-de28f.appspot.com",
    messagingSenderId: "867482925737",
    appId: "1:867482925737:web:3b54553b906253df3407b8"
});

const auth = appConfig.auth();
const firestore = appConfig.firestore();
const storage = appConfig.storage();

export { auth, firestore, storage };