import StageProgress from '../stageProgress/stageProgress';
import styles from './layout.module.css';

const Layout = ({children}) => {
  return ( 
    <div className={styles.container}>
      <StageProgress />
      {children}
    </div>
  );
}
 
export default Layout;