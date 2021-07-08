
import firebase from  "firebase/app"
import "firebase/auth" 

const app = firebase.initializeApp({
    apiKey: "AIzaSyDSJl_OYmwybYW-j5Oj4ww0Kg6jE94ewjs",
    authDomain: "shoppersstop-dd2db.firebaseapp.com",
    projectId: "shoppersstop-dd2db",
    storageBucket: "shoppersstop-dd2db.appspot.com",
    messagingSenderId: "190357197285",
    appId: "1:190357197285:web:84a9b52dc97590ab085f0c",
    measurementId: "G-DZZCZ522RD"
})

const auth = app.auth();

const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();
const twitter = new firebase.auth.TwitterAuthProvider();

export { firebase, auth, google };