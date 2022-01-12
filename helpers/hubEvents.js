import React, { useEffect } from "react";
import Amplify, { Auth, DataStore, Hub } from "aws-amplify";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/modalAtom";

function HubEvents() {
  const [user, setUser] = useRecoilState(userState);

  const datastoreEventHandler = async (capsule) => {
    const { event, data } = capsule.payload;
    console.log("datastore event", event, data ? data : "");
    if (event === "ready") {
      console.log("DataStore is ready");
    }
  };

  const authEventHandler = async (capsule) => {
    const { event, data } = capsule.payload;
    console.log("auth event", event, data ? data : "");
    if (event === "signIn") {
      //   console.log("User is authenticated");
      const signedInUser = await Auth.currentAuthenticatedUser();
      setUser(signedInUser.attributes);
    }
    if (event === "signOut") {
      //   console.log("User is authenticated");
      setUser(null);
    }
    // try {
    // } catch {
    //   setUser(null);
    // }
  };

  useEffect(() => {
    Hub.listen("datastore", datastoreEventHandler);
    Hub.listen("auth", authEventHandler);
    // DataStore.configure({
    //   errorHandler: (error) => {
    //     console.warn("Unrecoverable error", { error });
    //   },
    // syncPageSize: 1000,
    // maxRecordsToSync: 30000,
    // fullSyncInterval: 60, // minutes
    // });
    // DataStore.start().catch(() => {
    //   DataStore.clear().then(() => {
    //     DataStore.start();
    //   });
    // });
    return () => {
      Hub.remove("datastore", datastoreEventHandler);
      Hub.remove("auth", authEventHandler);
    };
  }, []);

  return <div></div>;
}

export default HubEvents;
