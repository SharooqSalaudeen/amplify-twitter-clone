import React, { useEffect, useContext } from "react";
import Amplify, { Auth, API, Hub, Predicates } from "aws-amplify";
import { AuthContext } from "../store";
import * as queries from "../src/graphql/queries";

function HubEvents() {
  const { setUser } = useContext(AuthContext);

  function getUser() {
    Auth.currentAuthenticatedUser()
      .then(async (userData) => {
        const { data } = await API.graphql({
          query: queries.getUser,
          variables: {
            id: userData.attributes.sub,
          },
        });
        console.log("getUser", data);
        setUser(data.getUser);
      })
      .catch(() => {
        console.log("Not signed in");
        setUser(null);
      });
  }

  const authEventHandler = async (capsule) => {
    const { event, data } = capsule.payload;
    console.log("auth event", event, data ? data : "");
    if (event === "signIn") {
      console.log("User is signed in");
      getUser();
    }
    if (event === "signOut") {
      console.log("User is signed out");
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
    Hub.listen("auth", authEventHandler);

    return () => {
      Hub.remove("auth", authEventHandler);
    };
  }, []);

  return <div></div>;
}

export default HubEvents;
