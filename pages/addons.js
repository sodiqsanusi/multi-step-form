import Head from "next/head";
import { useContext, useEffect } from 'react';
import { globalContext } from '../globalContext';
import Container from "../components/container/container";
import styles from '../styles/addons.module.css';
import Image from "next/image";
import checkmarkIcon from '../public/images/icon-checkmark.svg'


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
      <Container>
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience</h2>
        <section className={styles.layout}>
          <label htmlFor="onlineService" className={styles.addons}>
            <input type="checkbox" name="onlineService" id="onlineService"/>
            <span className={styles.checkmarkIcon}><Image src={checkmarkIcon} aria-hidden='true'/></span>
            <div className={styles.mid}>
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
          </label>
          <label htmlFor="largerStorage" className={styles.addons}>
            <input type="checkbox" name="largerStorage" id="largerStorage"/>
            <span className={styles.checkmarkIcon}><Image src={checkmarkIcon} aria-hidden='true'/></span>
            <div className={styles.mid}>
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+$2/mo</p>
          </label>
          <label htmlFor="customProfile" className={styles.addons}>
            <input type="checkbox" name="customProfile" id="customProfile"/>
            <span className={styles.checkmarkIcon}><Image src={checkmarkIcon} aria-hidden='true'/></span>
            <div className={styles.mid}>
              <h3>Customizable profile</h3>
              <p>Custom theme on your profile</p>
            </div>
            <p>+$2/mo</p>
          </label>
        </section>
      </Container>
    </>
    
  );
}
 
export default AddOns;