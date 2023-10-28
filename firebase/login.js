import { auth } from './config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password')
const loginForm = document.getElementById('login-form')



const handleLogin = (e) => {
    e.preventDefault();
    const email = emailElm.value;
    const password = passwordElm.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('dang nhap thanh cong')
            window.location = 'index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
}
loginForm.addEventListener('submit', handleLogin);
console.log(1)