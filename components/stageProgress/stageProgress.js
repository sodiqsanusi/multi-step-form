import styles from './stageProgress.module.css';
import { useContext } from 'react'
import { globalContext } from '../../globalContext';

const StageProgress = () => {

  let {stage} = useContext(globalContext)

  return ( 
    <section className={styles.container}>
      <ul className={styles.progressList}>
        <li>
          <div className={styles.progressListNum} id={`active1${stage}`}>1</div>
          <div className={styles.progressListExp}>
            <p>step 1</p>
            <p>your info</p>
          </div>
        </li>
        <li>
          <div className={styles.progressListNum} id={`active2${stage}`}>2</div>
          <div className={styles.progressListExp}>
            <p>step 2</p>
            <p>select plan</p>
          </div>
        </li>
        <li>
          <div className={styles.progressListNum} id={`active3${stage}`}>3</div>
          <div className={styles.progressListExp}>
            <p>step 3</p>
            <p>add-ons</p>
          </div>
        </li>
        <li>
          <div className={styles.progressListNum} id={`active4${stage}`}>4</div>
          <div className={styles.progressListExp}>
            <p>step 4</p>
            <p>summary</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
 
export default StageProgress;