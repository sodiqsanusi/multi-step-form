import { useState, createContext } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({children}) => {
  let [stage, setStage] = useState(1);
  let [renewal, setRenewal] = useState('month');
  let [plan, setPlan] = useState('arcade');

  return(
    <globalContext.Provider
     value={{stage, setStage, renewal, setRenewal, plan, setPlan}}
    >
      {children}
    </globalContext.Provider>
  )
}