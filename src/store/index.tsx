/**
 * @Author lester
 * @Date 2021-04-21
 */

import React, { createContext, useReducer } from "react";

interface StateProps {

}

const initialState: StateProps = {
  userName: 'lester'
};

const reducer = (state: StateProps, newState: StateProps) => {
  return {
    ...state,
    ...newState
  }
};

export const Context: any = createContext({});

const Index: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
};

export default Index;
