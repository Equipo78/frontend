import logo from '../../assets/logo.svg';
import bell from '../../assets/nav-icons/notifications.svg';
import user from '../../assets/nav-icons/user.png';

import styles from './styles.module.scss';
const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.boxLogo}>
        <img alt="logo" className={styles.logo} src={logo} />
      </div>

      <section className={styles.userPanel}>
        <img alt="bell" src={bell} />
        <article className={styles.user}>
          <img alt="user" src={user} />
          <p>Hola Maria</p>
        </article>
      </section>
    </header>
  );
};

export default Header;
