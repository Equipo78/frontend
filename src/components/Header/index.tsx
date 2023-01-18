import { useUserDataQuery } from '../../app/api/userApi';
import logo from '../../assets/logo.svg';
import bell from '../../assets/nav-icons/notifications.svg';
import user from '../../assets/nav-icons/user.png';

import styles from './styles.module.scss';
const Header = () => {
  const { data, isLoading, error, isSuccess } = useUserDataQuery();

  let content;

  if (isLoading) content = <h3>loading...</h3>;

  if (error) content = <div>Error fetching...</div>;

  if (isSuccess)
    content = (
      <article className={styles.user}>
        <img alt="user" src={user} />
        <p>Hola {data?.user.name}</p>
      </article>
    );

  return (
    <header className={styles.container}>
      <div className={styles.boxLogo}>
        <img alt="logo" className={styles.logo} src={logo} />
      </div>

      <section className={styles.userPanel}>
        <img alt="bell" src={bell} />
        {content}
      </section>
    </header>
  );
};

export default Header;
