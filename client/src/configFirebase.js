import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()

db.enablePersistence({synchronizeTabs: true})

// storage
const storage = firebase.storage()

// firebase collections
const dataCollection = db.collection('user_skin_faces')

export default {
    db,
    storage,
    dataCollection
}
