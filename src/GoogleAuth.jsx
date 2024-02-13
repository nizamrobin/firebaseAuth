import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function GoogleAuth({ auth }) {
  const provider = new GoogleAuthProvider();

  return (
    <>
      <h3>Sign in with Google account.</h3>
      <button onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google account
      </button>
    </>
  );
}
