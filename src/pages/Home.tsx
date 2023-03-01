import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../app/store';
import BalanceCard from '../components/Home/BalanceCard';
import MenuCard from '../components/Home/MenuCard';
import MovementsCard from '../components/Home/MovementsCard';

import styles from './styles.module.scss';

export const Home = () => {
  const getToken = useSelector((state: RootState) => state.auth);
  const { email, token } = getToken;

  const emailAbbr = email?.split('@')[0];
  const tokenAbbr = `${token?.slice(0, 9)}...`;

  return (
    <>
      {!token ? (
        <Navigate to="/login" />
      ) : (
        <section className={styles.layout}>
          <h1>Welcome {emailAbbr}!</h1>
          <p>Token: {tokenAbbr}</p>
          <article className={styles.boxLeft}>
            <BalanceCard />
            <MenuCard />
          </article>

          <article className={styles.boxRight}>
            <MovementsCard />
          </article>
        </section>
      )}
    </>
  );
};

export default Home;
