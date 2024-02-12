import "./App.css";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import NormalAuth from "./NormalAuth";

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  return (
    <>
      <NormalAuth auth={auth} user={user} />
    </>
  );
}

export default App;
