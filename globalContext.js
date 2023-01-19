import { useState, createContext } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({children}) => {
  let [stage, setStage] = useState(1);

  return(
    <globalContext.Provider value={{stage, setStage}}>
      {children}
    </globalContext.Provider>
  )
}