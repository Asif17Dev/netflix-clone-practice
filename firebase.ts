// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCyqegDa3ml_XZ-FnNGI5wMQ02La37JmX0',
  authDomain: 'netflix-clone-7f379.firebaseapp.com',
  projectId: 'netflix-clone-7f379',
  storageBucket: 'netflix-clone-7f379.appspot.com',
  messagingSenderId: '837899940540',
  appId: '1:837899940540:web:b4e255eb6cfdf9003616b9',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
