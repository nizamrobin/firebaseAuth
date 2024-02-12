import Signin from "./Signin";
import Signup from "./Signup";
import Signout from "./Signout";

export default function NormalAuth({ auth, user }) {
  return (
    <>
      <h1>Firebase Authentications</h1>
      {user ? (
        <>
          <h2>
            {user.email} is logged in. To sign out please click the sign out
            button below.
          </h2>
          <Signout auth={auth} />
        </>
      ) : (
        <>
          <Signup />
          <Signin />
        </>
      )}
    </>
  );
}
