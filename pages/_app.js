import { useEffect } from "react";
import Amplify, { DataStore, Hub } from "aws-amplify";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/modalAtom";

import "../configureAmplify";
import HubEvents from "../helpers/hubEvents";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  // const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
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
  }, []);

  return (
    <RecoilRoot>
      <HubEvents />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
