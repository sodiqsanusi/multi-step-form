import { useState, createContext } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({children}) => {
  let [stage, setStage] = useState(1);
  let [renewal, setRenewal] = useState('month');
  let [plan, setPlan] = useState('arcade');
  let [addons, setAddons] = useState([]);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  let [validity, setValidity] = useState({
    name: true,
    email: true,
    phoneNum: true
  })

  return(
    <globalContext.Provider
     value={{
       stage, setStage, renewal, setRenewal, plan, setPlan, 
       addons, setAddons, name, setName, email, setEmail, phoneNumber,
       setPhoneNumber, validity, setValidity
      }}
    >
      {children}
    </globalContext.Provider>
  )
}