import Head from "next/head";
import { useContext, useEffect } from 'react';
import { globalContext } from '../globalContext';
import Container from "../components/container/container";
import Link from "next/link";
import styles from '../styles/finish-up.module.css';

const FinishUp = () => {

  let {setStage, addons, plan, renewal} = useContext(globalContext);
  useEffect(() => {
    setStage(4);
    console.log(addons);
  }, [])

  let choices = {
    arcade: {
      name: 'Arcade',
      amount: 9,
      tots () {
        return renewal == 'month' ? this.amount : this.amount * 10
      }
    },
    advanced: {
      name: 'Advanced',
      amount: 12,
      tots () {
        return renewal == 'month' ? this.amount : this.amount * 10
      }
    },
    pro: {
      name: 'Pro',
      amount: 15,
      tots () {
        return renewal == 'month' ? this.amount : this.amount * 10
      }
    }
  }
  let renewalNames = {
    month: {
      long: 'Monthly',
      short: 'mo'
    },
    year: {
      long: 'Yearly',
      short: 'yr'
    }
  }
  let addonDetails = {
    0: {
      name: 'Online service',
      amount: 1,
      tots() {
        return renewal == 'month' ? this.amount : this.amount * 10 
      }
    },
    1: {
      name: 'Larger storage',
      amount: 2,
      tots() {
        return renewal == 'month' ? this.amount : this.amount * 10 
      }
    },
    2: {
      name: 'Customizable profile',
      amount: 2,
      tots() {
        return renewal == 'month' ? this.amount : this.amount * 10 
      }
    }
  }

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
              <h3>{choices[plan].name} ({renewalNames[renewal].long})</h3>
              <Link href='/select-plan'>Change</Link>
            </div>
            <p>${choices[plan].tots()}/{renewalNames[renewal].short}</p>
          </div>
          {addons && (
            <div className={styles.summaryEnd}>
              {addons.map(addonNumber => (
                <div key={addonNumber}>
                  <p>{addonDetails[addonNumber].name}</p>
                  <p>+${addonDetails[addonNumber].tots()}/{renewalNames[renewal].short}</p>
                </div>
              ))}
            </div>
          )}
        </section>
        <div className={styles.total}>
          <p>Total (per {renewal})</p>
          <p>$12/{renewalNames[renewal].short}</p>
        </div>
      </Container>
    </>
  );
}
 
export default FinishUp;