import styles from './container.module.css';

const Container = ({children}) => {
  return ( 
    <main className={styles.container}>
      {children}
    </main>
  );
}
 
export default Container;