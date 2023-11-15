import { auth } from './config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";



const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password')
const registerForm = document.getElementById('register-form')

const handleRegister = (e) => {
    const email = emailElm.value;
    const password = passwordElm.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Dang ki thanh cong')
            window.location = '/login.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
        });
}
registerForm.addEventListener('submit', handleRegister);


