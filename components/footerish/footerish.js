import { useEffect, useState } from 'react';
import styles from './footerish.module.css';
import { useRouter } from 'next/router';

const Footerish = () => {

  let router = useRouter();
  let routes = {
    1: '/',
    2: '/select-plan',
    3: '/addons',
    4: '/finish-up',
    5: '/thank-you'
  }
  let [next, setNext] = useState(undefined)
  let [previous, setPrevious] = useState(undefined)

  let getObjectKey = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  useEffect(() => {
    let present = router.pathname;
    setNext(parseInt(getObjectKey(routes, present)) + 1);
    setPrevious(parseInt(getObjectKey(routes, present)) - 1);
    if(routes[next]) router.prefetch(routes[next]);
    if(routes[previous]) router.prefetch(routes[next]);
  })

  let handleNext = () => {
    if(routes[next]){
      router.push(routes[next])
    }
  }

  let handlePrevious = () => {
    if(routes[previous]){
      router.push(routes[previous])
    }
  }

  if(!routes[next]) return

  return (
    <footer className={styles.main}>
      <div className={styles.container}>
        {routes[previous] && <button onClick={handlePrevious}>Go Back</button>}
        <button id={(next == 5) ? styles.confirm : ''} onClick={handleNext}>{(next == 5) ?  'Confirm' :'Next Step'}</button>
      </div>
    </footer>
  );
}
 
export default Footerish;