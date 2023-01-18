import { Link } from 'react-router-dom';

import { options } from './data';
import styles from './styles.module.scss';

const MenuCard = () => {
  return (
    <section className={styles.containerMenu}>
      <ul className={styles.options}>
        {options.map(({ name, to, img }) => (
          <li key={name}>
            <Link to={to}>
              <img alt={name} src={img} />
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuCard;
