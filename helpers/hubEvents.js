import React, { useEffect, useContext } from "react";
import Amplify, { Auth, DataStore, Hub, Predicates } from "aws-amplify";
import { AuthContext } from "../store";
import { User } from "../src/models";

function HubEvents() {
  const { setUser } = useContext(AuthContext);

  function getUser() {
    Auth.currentAuthenticatedUser()
      .then(async (userData) => {
        DataStore.observeQuery(User, (user) => user?.id("eq", userData.attributes.sub)).subscribe((snapshot) => {
          const { items } = snapshot;
          setUser(items[0]);
        });
      })
      .catch(() => {
        console.log("Not signed in");
        setUser(null);
      });
  }

  const datastoreEventHandler = async (capsule) => {
    const { event, data } = capsule.payload;
    console.log("datastore event", event, data);
    console.log("datastore event", event, data ? data : "");
    if (event === "ready") {
      console.log("DataStore is ready");
    }
  };

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
    Hub.listen("datastore", datastoreEventHandler);
    Hub.listen("auth", authEventHandler);

    return () => {
      Hub.remove("datastore", datastoreEventHandler);
      Hub.remove("auth", authEventHandler);
    };
  }, []);

  return <div></div>;
}

export default HubEvents;
