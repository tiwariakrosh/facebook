import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJKjzDw3XCl4PEfB-FmwoxRMCjQzbi5fY",
    authDomain: "facebook-5dd3d.firebaseapp.com",
    projectId: "facebook-5dd3d",
    storageBucket: "facebook-5dd3d.appspot.com",
    messagingSenderId: "523181240783",
    appId: "1:523181240783:web:ad5b9ffef32d9ccb62a2ba",
    measurementId: "G-FXR2TCCH10"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export default db;
