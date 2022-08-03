import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const clientCredentials = {
  apiKey: 'AIzaSyDcbbeklJTSnW0aFfwm94JVt7JAtdKhUlI',
  authDomain: 'portfolio-78183.firebaseapp.com',
  projectId: 'portfolio-78183',
  storageBucket: 'portfolio-78183.appspot.com',
  messagingSenderId: '335294303345',
  appId: '1:335294303345:web:f160fb454899727e015fd0',
  measurementId: 'G-0YJCJPDGX6',
};

let app: FirebaseApp;

if (getApps().length === 0) {
  app = initializeApp(clientCredentials);
} else {
  app = getApp();
}

export const db = getFirestore(app);
