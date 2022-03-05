import firebaseApp from "./firebase";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

export const googleSignIn = async () => {
  return signInWithPopup(auth, provider);
};
