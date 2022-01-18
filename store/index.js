import React from "react";
// import { AuthContext, AuthProvider } from "./auth";
import { AuthContext, AuthProvider } from "./simpleAuth";

export default function GlobalProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AuthContext };
