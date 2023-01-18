import { movements } from './fake_db';
import styles from './styles.module.scss';
const MovementsCard = () => {
  return (
    <section className={styles.containerMov}>
      <h3>Ultimos movimientos</h3>

      <ul className={styles.boxList}>
        {movements.map(({ detail, amount, date, img }, index) => (
          <li key={index}>
            <div className={styles.detail}>
              <img alt={img} src={img} />
              <h4>{detail}</h4>
            </div>
            <div className={styles.content}>
              <p>{amount}</p>
              <span>{date}</span>
            </div>
          </li>
        ))}
      </ul>

      <button>Ver mas</button>
    </section>
  );
};

export default MovementsCard;
