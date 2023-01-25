import Head from "next/head";
import { useContext, useEffect } from 'react';
import { globalContext } from '../globalContext';
import Container from "../components/container/container";
import styles from '../styles/addons.module.css';
import Image from "next/image";
import checkmarkIcon from '../public/images/icon-checkmark.svg'


const AddOns = () => {

  let {setStage, renewal, addons, setAddons} = useContext(globalContext);
  useEffect(() => {
    setStage(3)
  }, [])

  let periods = {
    month: {
      change: 'year',
      words: ['1mo', '2/mo', '2/mo']
    },
    year: {
      words: ['10/yr', '20/yr', '20/yr']
    }
  }

  let lilac = [
    {
      name: 'Online service',
      amount: 1
    },
    {
      name: 'Larger storage',
      amount: 2
    },
    {
      name: 'Customizable profile',
      amount: 2
    }
  ]

  let handleAdding = (num) => {
    if(addons.some(item => item == num)){
      let newAddons = addons.filter(addon => addon != num)
      setAddons(newAddons);
    }else{
      setAddons([...addons, num])
    }
  }

  return (
    <>
      <Head>
        <title>Choose add-ons you want</title>
      </Head>
      <Container>
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience</h2>
        <section className={styles.layout}>
          <label
           htmlFor="onlineService" className={styles.addons}
           onClick={() => handleAdding(0)}
          >
            <input type="checkbox" name="onlineService" id="onlineService"/>
            <span className={styles.checkmarkIcon}><Image src={checkmarkIcon} aria-hidden='true' alt=""/></span>
            <div className={styles.mid}>
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
            <p>+${periods[renewal].words[0]}</p>
          </label>
          <label
           htmlFor="largerStorage" className={styles.addons}
           onClick={() => handleAdding(1)}
          >
            <input type="checkbox" name="largerStorage" id="largerStorage"/>
            <span className={styles.checkmarkIcon}><Image src={checkmarkIcon} aria-hidden='true' alt=""/></span>
            <div className={styles.mid}>
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+${periods[renewal].words[1]}</p>
          </label>
          <label
           htmlFor="customProfile" className={styles.addons}
           onClick={() => handleAdding(2)}
          >
            <input type="checkbox" name="customProfile" id="customProfile"/>
            <span className={styles.checkmarkIcon}><Image src={checkmarkIcon} aria-hidden='true' alt=""/></span>
            <div className={styles.mid}>
              <h3>Customizable profile</h3>
              <p>Custom theme on your profile</p>
            </div>
            <p>+${periods[renewal].words[2]}</p>
          </label>
        </section>
      </Container>
    </>
    
  );
}
 
export default AddOns;