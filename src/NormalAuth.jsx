import Signin from "./Signin";
import Signup from "./Signup";

export default function NormalAuth({ auth }) {
  return (
    <>
      <h1>Firebase Authentications</h1>
      <Signup />
      <Signin />
    </>
  );
}
