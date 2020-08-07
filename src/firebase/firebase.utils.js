import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCtwtk8vNA3MlFa7oVwipNtRYdrJB3HuPs',
  authDomain: 'crwn-ecommerce-b579b.firebaseapp.com',
  databaseURL: 'https://crwn-ecommerce-b579b.firebaseio.com',
  projectId: 'crwn-ecommerce-b579b',
  storageBucket: 'crwn-ecommerce-b579b.appspot.com',
  messagingSenderId: '159203360012',
  appId: '1:159203360012:web:870b24767cd117b4895d29',
  measurementId: 'G-V9WLX71P08',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const docSnapshot = await userRef.get();

  if (!docSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
