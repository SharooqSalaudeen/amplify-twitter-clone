import React from "react";
// import { AuthContext, AuthProvider } from "./authWithReducer";
import { AuthContext, AuthProvider } from "./auth";
import { GeneralContext, GeneralProvider } from "./general";

export default function GlobalProvider({ children }) {
  return (
    <AuthProvider>
      <GeneralProvider>{children}</GeneralProvider>
    </AuthProvider>
  );
}

export { AuthContext, GeneralContext };
