import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmaE4YYAcMrPizte9MMZF2RdmK7aIvd2Y",
    authDomain: "ecommerce-54d74.firebaseapp.com",
    projectId: "ecommerce-54d74",
    storageBucket: "ecommerce-54d74.appspot.com",
    messagingSenderId: "519973538215",
    appId: "1:519973538215:web:e1defa9227c2a2d293ce82"
  };

const firebasApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebasApp.firestore();
const auth = firebasApp.auth();
const storage = firebasApp.storage();

export const uploadImage = (file) => {
    return new Promise( (resolve, eject )=>{
        const uploadProcess = storage.ref(`images/${file.name}-${file.lastModified}`).put(file);
        uploadProcess.on("state_changed", (snapshot) => console.log("la imagen se esta subiendo", snapshot), eject,
        () => {
            storage.ref('images').child(`${file.name}-${file.lastModified}`).getDownloadURL().then(resolve);
        })

    });
}