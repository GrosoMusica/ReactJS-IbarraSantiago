
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZY41ZFAmg71aBYiTpkiupQHPNWHOqbg",
  authDomain: "ibarrasantiago-reactcoder.firebaseapp.com",
  projectId: "ibarrasantiago-reactcoder",
  storageBucket: "ibarrasantiago-reactcoder.appspot.com",
  messagingSenderId: "134314355087",
  appId: "1:134314355087:web:b2cd48840c29fb35e4c3fa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);