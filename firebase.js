
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_SECRET,
  authDomain: "domain-boyz.firebaseapp.com",
  projectId: "domain-boyz",
  storageBucket: "domain-boyz.firebasestorage.app",
  messagingSenderId: "352502874975",
  appId: "1:352502874975:web:3cbda3da79f9d80f4facea"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)


export {app, auth}