import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBre1_KCx6CYItgOatV5HfKP3iYAak_r-Y",
  authDomain: "counselling-system-7d104.firebaseapp.com",
  projectId: "counselling-system-7d104",
  storageBucket: "counselling-system-7d104.firebasestorage.app",
  messagingSenderId: "602908055823",
  // databassURL:"https://counselling-system-7d104-default-rtdb.firebaseio.com/",
  appId: "1:602908055823:web:e36d896f1dc59171e1067a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const googleAuthProvider = new GoogleAuthProvider();
