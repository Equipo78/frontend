import { Link } from 'react-router-dom';

import { navButtons, navRoutes } from './routes';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        {navRoutes.map(({ name, to, img }) => (
          <li key={name} className={styles.navItem}>
            <img alt={name} src={img} />
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>

      <section>
        {navButtons.map(({ name, img }) => (
          <article key={name} className={styles.navItem}>
            <img alt={name} src={img} />
            <p>{name}</p>
          </article>
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
