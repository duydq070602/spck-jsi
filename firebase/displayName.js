import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from './config.js';

const welcomeText = document.getElementById('welcome-text');

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user.email);
    welcomeText.textContent = `Welcome ${user.email}`;
  } else {
    window.location = './login.html';
  }
});