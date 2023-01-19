import Footerish from '../footerish/footerish';
import StageProgress from '../stageProgress/stageProgress';
import styles from './layout.module.css';

const Layout = ({children}) => {
  return ( 
    <div className={styles.container}>
      <StageProgress />
      {children}
      <Footerish />
    </div>
  );
}
 
export default Layout;