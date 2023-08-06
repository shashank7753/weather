import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBDEsvyAuZc4kZ2rLq-XKiJcJ_SqBI8LkM",
  authDomain: "weather-forecast-website-c8d5b.firebaseapp.com",
  projectId: "weather-forecast-website-c8d5b",
  storageBucket: "weather-forecast-website-c8d5b.appspot.com",
  messagingSenderId: "1043413693456",
  appId: "1:1043413693456:web:5c2c78a5c2b26f32450695",
});

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage=app.storage()
export const auth = app.auth();
export default app;
