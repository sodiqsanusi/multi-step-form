import Head from "next/head";
import { useContext, useEffect } from 'react';
import { globalContext } from '../globalContext';
import styles from '../styles/thank-you.module.css';
import Container from "../components/container/container";
import Image from "next/image";
import thankYouImage from '../public/images/icon-thank-you.svg';

const ThankYou = () => {

  let {setStage} = useContext(globalContext);
  useEffect(() => {
    setStage(4)
  }, [])

  return ( 
    <>
      <Head>
        <title>Thank you for choosing LoremGaming!</title>
      </Head>
      <Container>
        <section className={styles.container}>
          <div className={styles.imageContainer}><Image src={thankYouImage} aria-hidden='true' alt=""/></div>
          <h1>Thank you!</h1>
          <h2>Thanks for confirming your subscription! We hope you have fun using our platform.
            If you ever need support, please feel free to email us at support@loremgaming.com.
          </h2>
        </section>  
      </Container>  
    </>
  );
}
 
export default ThankYou;