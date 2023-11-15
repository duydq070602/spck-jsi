import { auth } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const logoutBtn = document.getElementById('logout-btn');

const handleLogout = () => {
  signOut(auth).then(() => {
    window.location = './login.html'
  }).catch((error) => {
    // An error happened.
  });
}

logoutBtn.addEventListener('click', handleLogout);