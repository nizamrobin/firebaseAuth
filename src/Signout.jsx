import { signOut } from "firebase/auth";
export default function Signout({ auth }) {
  const signOutHandler = () => {
    console.log(auth);
    signOut(auth);
  };
  return (
    <button type="button" onClick={signOutHandler}>
      Sign Out
    </button>
  );
}
