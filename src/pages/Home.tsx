import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../app/store';
import BalanceCard from '../components/Home/BalanceCard';
import MenuCard from '../components/Home/MenuCard';
import MovementsCard from '../components/Home/MovementsCard';
import MovementsList from '../features/Movements/MovementsList';

import styles from './styles.module.scss';

export const Home = () => {
  const getToken = useSelector((state: RootState) => state.auth);
  const { email, token } = getToken;

  return (
    <>
      {!token ? (
        <Navigate to="/login" />
      ) : (
        <section className={styles.layout}>
          <article className={styles.boxLeft}>
            <BalanceCard />
            <MenuCard />
          </article>

          <article className={styles.boxRight}>
            <MovementsList />
          </article>
        </section>
      )}
    </>
  );
};

export default Home;
