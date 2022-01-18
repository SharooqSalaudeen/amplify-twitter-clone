import { useEffect } from "react";
import Amplify, { DataStore, Hub } from "aws-amplify";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/modalAtom";
import GlobalProvider from "../store";

import "../configureAmplify";
import HubEvents from "../helpers/hubEvents";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <GlobalProvider>
      <RecoilRoot>
        <HubEvents />
        <Component {...pageProps} />
      </RecoilRoot>
    </GlobalProvider>
  );
}
