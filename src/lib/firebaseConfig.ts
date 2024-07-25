import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  //measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyB_QdTYMflaWoLvbQrvPiiqPALPOuy4KQI",
//   authDomain: "admin-new-5d3b1.firebaseapp.com",
//   projectId: "admin-new-5d3b1",
//   storageBucket: "admin-new-5d3b1.appspot.com",
//   messagingSenderId: "1031320793085",
//   appId: "1:1031320793085:web:7628dbf98eac62d1df3394"
// };
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase

export default app;