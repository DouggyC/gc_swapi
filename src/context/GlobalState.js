import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  planets: [1, 2, 3],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addToCart = product => {
    console.log(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        planets: state.planets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
