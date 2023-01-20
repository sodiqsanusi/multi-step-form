import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { globalContext } from '../globalContext'
import Container from '../components/container/container';

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
      <Container>
        <h1>Personal info</h1>
        <h2>Please provide your name, email, address, and phone number</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
             type="text" name="Name" id="name"
             placeholder='e.g. Stephen King'
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
             name="Email" id="email" type='email' 
             placeholder='e.g. stephenking@lorem.com'
            />
          </div>
          <div>
            <label htmlFor="number">Phone Number</label>
            <input
             type="text" name="Phone Number" id="number"
             placeholder='e.g. +1 234 567 890'
            />
          </div>
        </form>
      </Container>
    </>  
  )
}
