import Rebase from 're-base';
import firebase from 'firebase';
// import storage from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSls4TYY_42hIL7Riph-VscbmNbeEal40",
    authDomain: "kantelberg-recipes.firebaseapp.com",
    databaseURL: "https://kantelberg-recipes-default-rtdb.firebaseio.com",
    projectId: "kantelberg-recipes",
    storageBucket: "kantelberg-recipes.appspot.com",
    messagingSenderId: "222582341940",
    appId: "1:222582341940:web:27c6566bfed4b821076561",
    measurementId: "G-4VSZL6GG2M"
});


const storageVar = firebase.storage();


const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };
export { storageVar };

// This is a default export
export default base;