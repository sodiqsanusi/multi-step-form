import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { globalContext } from '../globalContext';
import Container from '../components/container/container';
import styles from '../styles/index.module.css';

export default function Home() {

  let {setStage} = useContext(globalContext);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  
  
  useEffect(() => {
    setStage(1)
  }, [])

  let handleChange = (type, dets) => {
    switch(type){
      case 'name':
        setName(dets);
        break;
      case 'email':
        setEmail(dets);
        break;
      case 'phoneNumber':
        setPhoneNumber(dets);
        break;
      default:
        setName(dets);
    }
  }

  return (
    <>
      <Head>
        <title>Multistep Form</title>
      </Head>
      <Container>
        <h1>Personal info</h1>
        <h2>Please provide your name, email address, and phone number.</h2>
        <form>
          <div className={styles.container}>
            <label htmlFor="name">Name</label>
            <input
             type="text" name="Name" id="name"
             placeholder='e.g. Stephen King' value={name}
             onChange={(e) => {handleChange('name', e.target.value)}}
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="email">Email Address</label>
            <input
             name="Email" id="email" type='email' 
             placeholder='e.g. stephenking@lorem.com' value={email}
             onChange={(e) => {handleChange('email', e.target.value)}}
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="number">Phone Number</label>
            <input
             type="text" name="Phone Number" id="number" inputMode='tel'
             placeholder='e.g. +1 234 567 890' value={phoneNumber}
             onChange={(e) => {handleChange('phoneNumber', e.target.value)}}
            />
          </div>
        </form>
      </Container>
    </>  
  )
}
