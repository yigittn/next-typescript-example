"use client";
import { createContext } from "react";
import React from "react";

const InitialState = {
  theme: "light",
};

type stateTypes = {
  theme: string;
};

type actionTypes = stateTypes;

export const ThemeContext = createContext<{
  state: stateTypes;
  dispatch: React.Dispatch<actionTypes>;
}>({ state: InitialState, dispatch: () => {} });

const reducer = (state: stateTypes, action: actionTypes) => {
  switch (action.theme) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, InitialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
