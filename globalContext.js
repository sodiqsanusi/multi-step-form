import { useState, createContext } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({children}) => {
  let [stage, setStage] = useState(2);

  return(
    <globalContext.Provider value={{stage, setStage}}>
      {children}
    </globalContext.Provider>
  )
}