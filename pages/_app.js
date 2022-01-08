import { useEffect } from "react";
import { DataStore, Hub } from "aws-amplify";

import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

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

    DataStore.start();

    // DataStore.start().catch(() => {
    //   DataStore.clear().then(() => {
    //     DataStore.start();
    //   });
    // });

    return () => {
      Hub.remove("datastore", eventHandler);
    };
  }, []);

  return (
    <RecoilRoot>
      {/* <SessionProvider session={session}> */}
      <Component {...pageProps} />
      {/* </SessionProvider> */}
    </RecoilRoot>
  );
}
