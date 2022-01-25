import React, { createContext, useReducer } from "react";

const initialGeneralState = {
  selectedPostID: null,
  modalStateOpen: false,
};

const generalActionTypes = {
  SET_SELECTED_POST_ID: "SET_SELECTED_POST_ID",
  SET_MODAL_STATE_OPEN: "SET_MODAL_STATE_OPEN",
};

const generalReducer = (state, action) => {
  switch (action.type) {
    case generalActionTypes.SET_SELECTED_POST_ID:
      return {
        ...state,
        selectedPostID: action.payload,
      };
    case generalActionTypes.SET_MODAL_STATE_OPEN:
      return {
        ...state,
        modalStateOpen: action.payload,
      };
    default:
      return state;
  }
};

const GeneralContext = createContext(initialGeneralState);
const GeneralProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, initialGeneralState);

  const dispatches = {
    setSelectedPostID(data) {
      dispatch({
        type: generalActionTypes.SET_SELECTED_POST_ID,
        payload: data,
      });
    },
    setModalStateOpen(data) {
      dispatch({
        type: generalActionTypes.SET_MODAL_STATE_OPEN,
        payload: data,
      });
    },
  };

  return <GeneralContext.Provider value={{ ...state, ...dispatches }}>{children}</GeneralContext.Provider>;
};

export { GeneralContext, GeneralProvider };
