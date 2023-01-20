import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { globalContext } from '../globalContext'

export default function Home() {

  let {setStage} = useContext(globalContext);
  useEffect(() => {
    setStage(1)
  }, [])

  return (
    <>
      <Head>
        <title>Multistep Form</title>
      </Head>
      <main>
        Hi, Home page
      </main>
    </>  
  )
}
