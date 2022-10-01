
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJ2arsnjBX9dawYQjAOIOFOcZ6Ipuvmgg",
  authDomain: "accueba-17dc3.firebaseapp.com",
  databaseURL: "https://accueba-17dc3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "accueba-17dc3",
  storageBucket: "accueba-17dc3.appspot.com",
  messagingSenderId: "477234664208",
  appId: "1:477234664208:web:db0087f48d33e3c2b1cb95",
  measurementId: "G-2HXP8YPQB4"
};

const app = initializeApp(firebaseConfig);

    function writeUserData(userID, name, email){
    const db = getDatbase(); 
    const reference = ref(db, 'users/' + userID);
    const analytics = getAnalytics(app);


    set(reference, {
        username: name,
        email: email,
    })
}

writeUserData("user1" , "user" , "newuser@me.com")