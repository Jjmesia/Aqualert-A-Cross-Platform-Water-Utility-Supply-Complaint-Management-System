import {initializeApp} from firebase/app;
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCWFBnzStF4ECVc7kPMQZF3CWMDb6znG0Q",
    authDomain: "practice-aqualert.firebaseapp.com",
    projectId: "practice-aqualert",
    storageBucket: "practice-aqualert.appspot.com",
    messagingSenderId: "220353225351",
    appId: "1:220353225351:web:d7aeacc249192b3078ce22",
    measurementId: "G-CV3D38ZWHF"
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Detect auth state

onAuthStateChanged(auth, user =>{
    if (user != null) {
        console.log('logged in !')
    }else {
        console.log('No User');
    }
})