import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdh7Vs1HCobF7jySadZYlbH52KaHoa4gU",
  authDomain: "reactchat-22b6a.firebaseapp.com",
  projectId: "reactchat-22b6a",
  storageBucket: "reactchat-22b6a.appspot.com",
  messagingSenderId: "323784502885",
  appId: "1:323784502885:web:ceb33581223707f293e08c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore()
export const storage=getStorage()