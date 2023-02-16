import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhNClEa5t8GQ3WnR3szUtMSnxYf_9w0Yc",
  authDomain: "fir-apps-47290.firebaseapp.com",
  projectId: "fir-apps-47290",
  storageBucket: "fir-apps-47290.appspot.com",
  messagingSenderId: "651894009597",
  appId: "1:651894009597:web:77e1f7527c40cf4d4e5894",
  measurementId: "G-Y9H7SL5HPR",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

//@param {DocumentSnapshot} doc

export function postToJSON(doc){
    const data = doc.data()
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    }
}