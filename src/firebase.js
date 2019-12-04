import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCJfZuJYIxOjjC5jFzmOGg9Wp1zDM1gfkc",
    authDomain: "todoapp-c11e5.firebaseapp.com",
    databaseURL: "https://todoapp-c11e5.firebaseio.com",
    projectId: "todoapp-c11e5",
    storageBucket: "todoapp-c11e5.appspot.com",
    messagingSenderId: "747848981835",
    appId: "1:747848981835:web:269180ba262881d0519cce",
    measurementId: "G-8J78ZWR4BM"
  };

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("todos");
