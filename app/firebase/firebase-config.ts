import 'firebase/firestore';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import * as firebase from 'firebase/app'
import 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyCtdfK9gTvGXTELeUKfTGzWCeqQ9Xyk5pE",
  authDomain: "hack-jklu-d7120.firebaseapp.com",
  projectId: "hack-jklu-d7120",
  storageBucket: "hack-jklu-d7120.appspot.com",
  messagingSenderId: "856972420583",
  appId: "1:856972420583:web:e4ca73bcbe0c2a731ec942",
  measurementId: "G-Y32RR36SNQ",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
