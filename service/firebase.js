// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig ={
    apiKey: "AIzaSyBCZziK1TFnQTKQI0wO2d5txLcM8oV4LE8",
    authDomain: "mi-proyecto-movil-3af42.firebaseapp.com",
    databaseURL: "https://mi-proyecto-movil-3af42.firebaseio.com",
    projectId: "mi-proyecto-movil-3af42",
    storageBucket: "mi-proyecto-movil-3af42.appspot.com",
    messagingSenderId: "241696301483", 
    appId: "1:241696301483:web:31c41f1016a77fae4db2ee",
    measurementId: "G-B8PBG4G495"

}
 class Firebase{
     constructor(){

        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
     }
     login = (email, pass) => {
        return this.auth.signInWithEmailAndPassword(email, pass) 
    }
    createuser =async (name, user, pass) =>{
await this.auth.createUserWithEmailAndPassword(user, pass)
return this.auth.currentUser.updateProfile({
    displayName: name
})
    }

    getuser = () =>{
        return this.auth.currentUser.displayName
    }
 }
 const firebaseservice = new Firebase()
 export default firebaseservice