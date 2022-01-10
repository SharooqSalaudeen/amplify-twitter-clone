import React, { useState, useEffect } from "react";
import Amplify, { Auth, Hub, DataStore, Predicates } from "aws-amplify";

function SignIn() {
  const [user, setUser] = useState(null);
  console.log("user", user);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser();
          getcurrentUserInfo();
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });
  }, []);

  const getUser = () => {
    return Auth.currentAuthenticatedUser()
      .then((userData) => {
        console.log("userData", userData);
        setUser(userData.attributes);
      })
      .catch(() => console.log("Not signed in"));
  };

  const getcurrentUserInfo = () => {
    return Auth.currentUserPoolUser()
      .then((userData) => {
        console.log("currentUserInfo", userData.getUserData());
      })
      .catch(() => console.log("Not signed in"));
  };
  console.log("user auth data", Auth.currentAuthenticatedUser());

  return (
    <div className="">
      {/* <button onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}>Open Facebook</button> */}
      {/* <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Open Google</button> */}
      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Open Google</button>
      <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>

      {user && (
        <>
          <button onClick={() => Auth.signOut()}>Sign Out </button>
          <p>{user.name}</p>
        </>
      )}
    </div>
  );
}

export default SignIn;
