// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

import { getStorage } from 'firebase/storage';
import { getFirestore, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDI-q2D6WBPJLuSWgHeVjSkHtnEuyFaWsA',
	authDomain: 'jsdr-project-chen.firebaseapp.com',
	projectId: 'jsdr-project-chen',
	storageBucket: 'jsdr-project-chen.appspot.com',
	messagingSenderId: '345702363363',
	appId: '1:345702363363:web:491c3f749daee3c97455d6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const storage = getStorage(app);
export const dbRef = collection(db, 'portfolio');

export const registerNewUser = (email, password) =>
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});

export const signInWithEmail = (email, password) =>
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});

export const signOutUser = () =>
	signOut(auth)
		.then(() => {
			console.log('Signed Out');
		})
		.catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});
