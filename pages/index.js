import Head from 'next/head'
import { useContext } from 'react'
import { globalContext } from '../globalContext'

export default function Home() {

  let {stage} = useContext(globalContext);

  return (
    <>
      <Head>
        <title>Multistep Form</title>
      </Head>
      <>
        Hi, Home page {stage}
      </>
    </>  
  )
}
