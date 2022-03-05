import firebaseApp from "./firebase";

import {
  getAuth,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
export const auth = getAuth(firebaseApp);

export const googleSignIn = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const gitHubSignIn = async () => {
  return signInWithPopup(auth, gitHubProvider);
};

export const authSignOut = async () => {
  await signOut(auth);
};
