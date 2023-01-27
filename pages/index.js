import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { globalContext } from '../globalContext';
import Container from '../components/container/container';
import styles from '../styles/index.module.css';

export default function Home() {

  let {setStage, name, setName,
      email, setEmail, phoneNumber, setPhoneNumber, validity} = useContext(globalContext);
  
  useEffect(() => {
    setStage(1)
  }, [])

  let formatNumber = (data) => {
    if(/\D/.test(data)) return undefined
    else{
      return data
    }
  }

  let handleChange = (type, dets) => {
    switch(type){
      case 'name':
        setName(dets);
        break;
      case 'email':
        setEmail(dets);
        break;
      case 'phoneNumber':
        let lilac = formatNumber(dets)
        lilac != undefined ? setPhoneNumber(dets) : ''
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
          <div className={styles.container} id={validity.name ? undefined : styles['invalid']}>
            <label htmlFor="name">
              <p>Name</p>
              <p className={styles.invalidInfo}>This field is not valid</p> 
            </label>
            <input
             type="text" name="Name" id="name"
             placeholder='e.g. Stephen King' value={name}
             onChange={(e) => {handleChange('name', e.target.value)}}
            />
          </div>
          <div className={styles.container} id={validity.email ? undefined : styles['invalid']}>
            <label htmlFor="email">
              <p>Email Address</p> 
              <p className={styles.invalidInfo}>This field is not valid</p> 
            </label>
            <input
             name="Email" id="email" type='email' 
             placeholder='e.g. stephenking@lorem.com' value={email}
             onChange={(e) => {handleChange('email', e.target.value)}}
            />
          </div>
          <div className={styles.container} id={validity.phoneNum ? undefined : styles['invalid']}>
            <label htmlFor="number">
              <p>Phone Number</p> 
              <p className={styles.invalidInfo}>This field is not valid</p> 
            </label>
            <input
             type="text" name="Phone Number" id="number" inputMode='tel'
             placeholder='e.g. 08012345678' value={phoneNumber} maxLength='11'
             onChange={(e) => {handleChange('phoneNumber', e.target.value)}}
            />
          </div>
        </form>
      </Container>
    </>  
  )
}
