import "./App.css";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import NormalAuth from "./NormalAuth";
import GoogleAuth from "./GoogleAuth";
import Signout from "./Signout";

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  return !user ? (
    <>
      <NormalAuth auth={auth} />
      <GoogleAuth auth={auth} />
    </>
  ) : (
    <>
      <h2>
        {user.email} is logged in. To sign out please click the sign out button
        below.
      </h2>
      <Signout auth={auth} />
    </>
  );
}

export default App;
