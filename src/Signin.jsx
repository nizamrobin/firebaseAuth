import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <>
      <h2>Sign In</h2>
      <form action="#" onSubmit={signIn}>
        <label htmlFor="emailSignIn">Email</label>
        <input
          type="email"
          id="emailSignIn"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="passwordSignIn">Password</label>
        <input
          type="password"
          id="passwordSignIn"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
