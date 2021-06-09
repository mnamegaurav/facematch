import React from "react";
import { reducer } from "./reducer";

const initialState = {
  uiLoading: false,
  refImages: [], // [{id: 1, imageData: 'something'}]
  queryImage: null,
  stepCount: 1,
};

export const Context = React.createContext(initialState);

export const useStore = () => {
  // Below line will return -> [state, dispatch]
  return React.useContext(Context);
};

const Store = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { children } = props;

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
