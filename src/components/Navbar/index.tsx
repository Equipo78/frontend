import { Link } from 'react-router-dom';

import { navRoutes } from './routes';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        {navRoutes.map(({ name, to, img }) => (
          <li key={name}>
            <img alt={name} src={img} />
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
