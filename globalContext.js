import { useState, createContext } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({children}) => {
  let [stage, setStage] = useState(1);
  let [renewal, setRenewal] = useState('month');

  return(
    <globalContext.Provider value={{stage, setStage, renewal, setRenewal}}>
      {children}
    </globalContext.Provider>
  )
}