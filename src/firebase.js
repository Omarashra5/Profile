// Import the functions you need
import { initializeApp } from "firebase/app"
import { getDatabase, ref, runTransaction , onValue } from "firebase/database"

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD_9cVw0fcUw0XqjdLY2JcC9NPB1PYWKLs",
  authDomain: "profile-omar.firebaseapp.com",
  databaseURL: "https://profile-omar-default-rtdb.firebaseio.com/",
  projectId: "profile-omar",
  storageBucket: "profile-omar.firebasestorage.app",
  messagingSenderId: "638564507987",
  appId: "1:638564507987:web:2cbce4f0df21a3254b01a6"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Realtime Database
export const db = getDatabase(app)
export { ref, runTransaction, onValue } 
