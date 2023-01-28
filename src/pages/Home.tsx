import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import BalanceCard from '../components/Home/BalanceCard';
import MenuCard from '../components/Home/MenuCard';
import MovementsCard from '../components/Home/MovementsCard';
import { selectCurrentToken, selectCurrentUser } from '../features/login/authSlice';

import styles from './styles.module.scss';

const get = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

export const Home = () => {
  // const user = useSelector(selectCurrentUser);
  // const token = useSelector(selectCurrentToken);
  const getToken = get('token');

  console.log(getToken);

  if (!getToken) {
    return <Navigate to="/login" />;
  }

  const user = getToken.email;
  const token = getToken.token;

  console.log(user, token);

  const userAbbr = user?.split('@')[0];
  const tokenAbbr = `${token?.slice(0, 9)}...`;

  return (
    <section className={styles.layout}>
      <h1>Welcome {userAbbr}!</h1>
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
