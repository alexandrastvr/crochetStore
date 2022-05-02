import { initializeApp } from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from '../configs/firebase';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const auth = getAuth();


export function signInWithGoogle() {
    return signInWithPopup(auth, provider);
}

export function signInWithFb() {
    return signInWithPopup(auth, fbProvider);
}

export function signOutFunction() {
    return signOut(auth);
}