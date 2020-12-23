import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSls4TYY_42hIL7Riph-VscbmNbeEal40",
  authDomain: "kantelberg-recipes.firebaseapp.com",
  databaseURL: "https://kantelberg-recipes-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;