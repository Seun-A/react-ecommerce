import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyDRojU1MMpz0Fh-vdro9K2gZZXyQIdnmiM",
  authDomain: "react-ecommerce-4b068.firebaseapp.com",
  projectId: "react-ecommerce-4b068",
  storageBucket: "react-ecommerce-4b068.appspot.com",
  messagingSenderId: "38025402855",
  appId: "1:38025402855:web:6b12c3e94147c5384c4542",
  measurementId: "G-ZXKZZ85HCB"
}

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...otherData })
    } catch (error) {
      console.log('Error Creating User', error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(objectsToAdd)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    // Takes empty object (second parameter), and converts the array into that object with titles as keys
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
