import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCffD0xFE6epQwctusgSl8-56NZ-msTkTM",
    authDomain: "fir-notes-99a3e.firebaseapp.com",
    databaseURL: "https://fir-notes-99a3e-default-rtdb.firebaseio.com",
    projectId: "fir-notes-99a3e",
    storageBucket: "fir-notes-99a3e.appspot.com",
    messagingSenderId: "836817999225",
    appId: "1:836817999225:web:31dc8d9eeee3267f594ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)