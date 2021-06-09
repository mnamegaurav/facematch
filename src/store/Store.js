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
  const [state, dispatch] = React.useContext(Context);
  return [state, dispatch];
};

const Store = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { children } = props;

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
