import React, { createContext, useReducer } from "react";

export interface ThemeContext {
    state: { darkMode: boolean };
    dispatch: React.Dispatch<{ type: string }> | undefined;
  }

export const ThemeContext = createContext<ThemeContext>({
    state: { darkMode: true },
    dispatch: undefined
});

const initialState = { darkMode: true };

const themeReducer: (
    state: { darkMode: boolean }, 
    action: { type: string }
) => { darkMode: boolean } = (
    state: { darkMode: boolean }, 
    action: { type: string }
) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export const ThemeProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state: false || state, dispatch: dispatch }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
