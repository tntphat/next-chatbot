import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Buttons from '../components/Buttons';

const isServerless = () => typeof window !== 'undefined';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Home
      <Buttons />
    </div>
  );
};

export default Home;
