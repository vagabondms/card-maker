import firebaseApp from "./firebase";

import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth(firebaseApp);

export const googleSignIn = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const gitHubSignIn = async () => {
  return signInWithPopup(auth, gitHubProvider);
};
