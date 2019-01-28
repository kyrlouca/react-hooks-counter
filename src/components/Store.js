import React, {  useReducer } from 'react';
import reducer from '../State/Reducer';
let initialState = {
  count: 99  
};

export const StoreContext = React.createContext(initialState, () => {});

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const val = { state, dispatch };
  return <StoreContext.Provider value={val}>{children}</StoreContext.Provider>;
}

export default Store;
