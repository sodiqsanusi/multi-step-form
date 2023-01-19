import Head from "next/head";
import { useContext, useEffect } from 'react'
import { globalContext } from '../globalContext'


const AddOns = () => {

  let {setStage} = useContext(globalContext);
  useEffect(() => {
    setStage(3)
  }, [])

  return (
    <>
      <Head>
        <title>Choose add-ons you want</title>
      </Head>
      <main>
        Add-ons!
      </main>
    </>
    
  );
}
 
export default AddOns;