import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(auth);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <>
      <h2>Sign Up</h2>
      <form action="#" onSubmit={signUp}>
        <label htmlFor="emailSignUp">Email</label>
        <input
          type="email"
          id="emailSignUp"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="passwordSignUp">Password</label>
        <input
          type="password"
          id="passwordSignUp"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
