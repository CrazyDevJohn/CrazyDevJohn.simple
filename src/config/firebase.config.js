import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDtKTGtWz2DfY0itvKBhJQEN_fePpwLtZc",
  authDomain: "crazydevjohn-e3b20.firebaseapp.com",
  projectId: "crazydevjohn-e3b20",
  storageBucket: "crazydevjohn-e3b20.appspot.com",
  messagingSenderId: "70152427096",
  appId: "1:70152427096:web:139cde0fc0a3bf22ec1c2d",
};

export const app = getApps.length > 0 ? getApp() : initializeApp(config);
export const db = getFirestore(app);
