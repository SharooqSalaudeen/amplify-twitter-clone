import { useEffect } from "react";
import Amplify, { DataStore, Hub } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";

import "../configureAmplify";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const eventHandler = async (capsule) => {
    console.log({ capsule });
    const {
      payload: { event, data },
    } = capsule;
    if (event === "ready") {
      console.log("DataStore is ready");
    }
  };

  useEffect(() => {
    Hub.listen("datastore", eventHandler);
    DataStore.configure({
      errorHandler: (error) => {
        console.warn("Unrecoverable error", { error });
      },
      // syncPageSize: 1000,
      // maxRecordsToSync: 30000,
      // fullSyncInterval: 60, // minutes
    });
    DataStore.start().catch(() => {
      DataStore.clear().then(() => {
        DataStore.start();
      });
    });
    return () => {
      Hub.remove("datastore", eventHandler);
    };
  }, []);

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
