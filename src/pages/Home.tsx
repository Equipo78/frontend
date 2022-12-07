import BalanceCard from '../components/Home/BalanceCard';
import MenuCard from '../components/Home/MenuCard';
import MovementsCard from '../components/Home/MovementsCard';

import styles from './styles.module.scss';

export const Home = () => {
  return (
    <section className={styles.layout}>
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
