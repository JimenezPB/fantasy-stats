import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistance, browserLocalPersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

export { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: import.meta.env.PROJECT_ID + 'firebaseapp.com',
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.PROJECT_ID + 'appspot.com',
}

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

setPersistance(auth, browserLocalPersistence);