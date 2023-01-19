import Head from "next/head";
import { useContext, useEffect } from 'react'
import { globalContext } from '../globalContext'

const FinishUp = () => {

  let {setStage} = useContext(globalContext);
  useEffect(() => {
    setStage(4)
  }, [])

  return (
    <>
      <Head>
        <title>Double checking your terms!</title>
      </Head>
      <main>
        Finishing Up!
      </main>
    </>
  );
}
 
export default FinishUp;