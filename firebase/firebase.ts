import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
// configを転記
    apiKey: "AIzaSyDoJfy8SYi4Q3yBvgOPKHuZdxaWBCdr2ns",
    authDomain: "tournament-db-e5f59.firebaseapp.com",
    projectId: "tournament-db-e5f59",
    storageBucket: "tournament-db-e5f59.appspot.com",
    messagingSenderId: "437030068412",
    appId: "1:437030068412:web:8df139f4071aa353a5f0b9",
    measurementId: "G-CCN8C2T5HM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;