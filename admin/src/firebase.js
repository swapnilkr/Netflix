import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBl4GhVw4A1RS-A9JjJgyIunyyFJC235JU",
    authDomain: "netflix-b13c1.firebaseapp.com",
    projectId: "netflix-b13c1",
    storageBucket: "netflix-b13c1.appspot.com",
    messagingSenderId: "581051734409",
    appId: "1:581051734409:web:384bfb06d99e924f19a958",
    measurementId: "G-0FN0K0HVV6"
  };
  

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;