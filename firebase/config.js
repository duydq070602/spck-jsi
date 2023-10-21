import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxARypGS3ygliAe3_2PQjld6llsecci6U",
  authDomain: "jsi-buoi6-4bb6a.firebaseapp.com",
  databaseURL: "https://jsi-buoi6-4bb6a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsi-buoi6-4bb6a",
  storageBucket: "jsi-buoi6-4bb6a.appspot.com",
  messagingSenderId: "987782737541",
  appId: "1:987782737541:web:614961ece262514d63c3ec",
  measurementId: "G-LSFDXEZWYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);