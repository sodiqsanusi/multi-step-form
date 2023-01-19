import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { globalContext } from '../globalContext'

const SelectPlan = () => {

  let {setStage} = useContext(globalContext);
  useEffect(() => {
    setStage(2)
  }, [])

  return ( 
    <>
      <Head>
        <title>Select your preferred plan</title>
      </Head>
      <main>
        Select your plan
      </main>
    </>
  );
}
 
export default SelectPlan;