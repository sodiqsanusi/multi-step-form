import Head from "next/head";
import { useContext, useEffect } from 'react';
import { globalContext } from '../globalContext';
import Container from "../components/container/container";
import Link from "next/link";
import styles from '../styles/finish-up.module.css';

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
      <Container>
        <h1>Finishing up</h1>
        <h2>Double-check everything looks OK before confirming.</h2>
        <section className={styles.summary}>
          <div className={styles.summaryStart}>
            <div>
              <h3>Arcade (Monthly)</h3>
              <Link href='/select-plan'>Change</Link>
            </div>
            <p>$9/mo</p>
          </div>
          <div className={styles.summaryEnd}>
            <div>
              <p>Online service</p>
              <p>+$1/mo</p>
            </div>
            <div>
              <p>Larger storage</p>
              <p>+$2/mo</p>
            </div>
          </div>
        </section>
        <div className={styles.total}>
          <p>Total (per month)</p>
          <p>$12/mo</p>
        </div>
      </Container>
    </>
  );
}
 
export default FinishUp;