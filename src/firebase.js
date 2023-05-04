import {initializeApp} from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgSGGsDMmVfZq4SfVKAHdj9hRkhVvgo0A",
    authDomain: "linkedin-clone-react-app-ffba7.firebaseapp.com",
    projectId: "linkedin-clone-react-app-ffba7",
    storageBucket: "linkedin-clone-react-app-ffba7.appspot.com",
    messagingSenderId: "118277703121",
    appId: "1:118277703121:web:0536d2c798d8c106daccf0",
    measurementId: "G-L0RNLMPRB5"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();

  export { db, auth }; 