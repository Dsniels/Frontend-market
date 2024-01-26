import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";



const firebasApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebasApp.firestore();
const auth = firebasApp.auth();
const storage = firebasApp.storage();

export const uploadImage = (file) => {
    return new Promise( (resolve, eject )=>{
        const uploadProcess = storage.ref(`images/${file.name}-${file.lastModified}`).put(file);
        uploadProcess.on("state_changed"), (snapshot) => console.log("la imagen se esta subiendo", snapshot), reject,
        () => {
            storage.ref('images').child(`${file.name}-${file.lastModified}`).getDownloadURL().then(resolve);
        }

    });
}