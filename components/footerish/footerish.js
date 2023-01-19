import styles from './footerish.module.css';
import { useRouter } from 'next/router';

const Footerish = () => {

  let router = useRouter();
  console.log(router.pathname);

  return ( 
    <footer className={styles.main}>
      <div className={styles.container}>
        <button>Go Back</button>
        <button>Next Step</button>
      </div>
    </footer>
  );
}
 
export default Footerish;