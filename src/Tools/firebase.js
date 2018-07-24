import firebase from "firebase"
import config from "./config.json"

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
