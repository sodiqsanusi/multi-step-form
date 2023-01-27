import { useState, createContext } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({children}) => {
  let [stage, setStage] = useState(1);
  let [renewal, setRenewal] = useState('month');
  let [plan, setPlan] = useState('arcade');
  let [addons, setAddons] = useState([]);
  // let [name, setName] = useState('');
  // let [email, setEmail] = useState('');
  // let [phoneNumber, setPhoneNumber] = useState('');

  return(
    <globalContext.Provider
     value={{
       stage, setStage, renewal, setRenewal, plan, setPlan, 
       addons, setAddons
      }}
    >
      {children}
    </globalContext.Provider>
  )
}