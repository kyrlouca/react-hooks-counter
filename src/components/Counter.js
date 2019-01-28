import React, {  useContext} from 'react';
import {inc} from '../State/Actions';
import { StoreContext } from './Store';


const Counter = () => {
  const {state,dispatch} = useContext(StoreContext)
  const {count}=state;
  
  return (
    <div>
      <h1>count: {count}</h1>      
      <button
        type="button"
        onClick={() => {      
          dispatch(inc());          
        }}
      >
        Inc
      </button>
    </div>
  );
};
export default Counter;
