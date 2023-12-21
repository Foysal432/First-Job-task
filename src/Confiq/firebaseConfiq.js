// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCZc9ry6Tu4BORGFG3bGt7HcWEt_LDBd4",
  authDomain: "first-job-task.firebaseapp.com",
  projectId: "first-job-task",
  storageBucket: "first-job-task.appspot.com",
  messagingSenderId: "136470614201",
  appId: "1:136470614201:web:f76a3d289ada7a5b688b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);