import { useSelector } from 'react-redux';

import BalanceCard from '../components/Home/BalanceCard';
import MenuCard from '../components/Home/MenuCard';
import MovementsCard from '../components/Home/MovementsCard';
import { selectCurrentToken, selectCurrentUser } from '../features/login/authSlice';

import styles from './styles.module.scss';

export const Home = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Wecome ${user}!` : 'Welcome';
  const tokenAbbr = `${token?.slice(0, 9)}...`;

  return (
    <section className={styles.layout}>
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
      <article className={styles.boxLeft}>
        <BalanceCard />
        <MenuCard />
      </article>

      <article className={styles.boxRight}>
        <MovementsCard />
      </article>
    </section>
  );
};

export default Home;
