import firebase from "firebase/app"
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV8QL0uTZg6oo4pLXDZ6rYpOml58pRlVw",
  authDomain: "blockthief-auth.firebaseapp.com",
  projectId: "blockthief-auth",
  storageBucket: "blockthief-auth.appspot.com",
  messagingSenderId: "512195650412",
  appId: "1:512195650412:web:7f4bbf0e68b8f5f3c84949",
  measurementId: "G-92X7CD0L7H"
};

firebase.initializeApp(firebaseConfig); 

export default getFirestore(app);