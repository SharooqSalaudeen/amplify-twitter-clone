import React, { createContext, useReducer } from "react";
import storage from "store2";

const initialAuthState = {
  is_authenticated: false,
  user: undefined,
};

const authActionTypes = {
  AUTHENTICATE_USER: "AUTHENTICATE_USER",
  SET_USER_DATA: "SET_USER_DATA",
  LOGOUT_USER: "LOGOUT_USER",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.AUTHENTICATE_USER:
      return {
        ...state,
        is_authenticated: action.payload,
      };
    case authActionTypes.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case authActionTypes.LOGOUT_USER:
      storage.clearAll();
      return {
        ...state,
        is_authenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(initialAuthState);
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const dispatches = {
    authenticateUser(validAuthentication) {
      dispatch({
        type: authActionTypes.AUTHENTICATE_USER,
        payload: validAuthentication,
      });
    },
    setUserData(data) {
      dispatch({
        type: authActionTypes.SET_USER_DATA,
        payload: data,
      });
    },
    logoutUser() {
      dispatch({
        type: authActionTypes.LOGOUT_USER,
      });
    },
  };

  return <AuthContext.Provider value={{ ...state, ...dispatches }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
