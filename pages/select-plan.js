import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { globalContext } from '../globalContext';
import Container from '../components/container/container';
import styles from '../styles/select-plan.module.css';
import Image from 'next/image';
import arcadeImage from '../public/images/icon-arcade.svg';
import advancedImage from '../public/images/icon-advanced.svg';
import proImage from '../public/images/icon-pro.svg';


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
      <Container>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
        <section className={styles.layout}>
          <button>
            <div><Image src={arcadeImage} aria-hidden='true' alt='Pick the arcade plan'/></div>
            <div className={styles.dummy}>
              <h3>Arcade</h3>
              <p>$9/mo</p>
              <p>2 months free</p>
            </div>
          </button>
          <button>
            <div><Image src={advancedImage} aria-hidden='true' alt='Pick the advanced plan'/></div>
            <div className={styles.dummy}>
              <h3>Advanced</h3>
              <p>$12/mo</p>
              <p>2 months free</p>
            </div>
          </button>
          <button>
            <div><Image src={proImage} aria-hidden='true' alt='Pick the pro plan'/></div>
            <div className={styles.dummy}>
              <h3>Pro</h3>
              <p>$15/mo</p>
              <p>2 months free</p>
            </div>
          </button>
        </section>
        <div>
          <div>
            <p>Monthly</p>
            <button>
              <span></span>
            </button>
            <p>Yearly</p>
          </div>
        </div>
      </Container>
    </>
  );
}
 
export default SelectPlan;