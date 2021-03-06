import { useEffect } from "react";
import "../styles/globals.css";
import GlobalProvider from "../store";

import "../configureAmplify";
import HubEvents from "../helpers/hubEvents";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <GlobalProvider>
      <HubEvents />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
