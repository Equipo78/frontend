import { Movement as MovementInterface } from './movement.interface';
import styles from './styles.module.scss';

interface MovementProps {
  data: MovementInterface;
}
const Movement = ({ data }: MovementProps) => {
  const { card, amount, type } = data;

  console.log(data);

  return (
    <li>
      <div className={styles.detail}>
        <h4>{card}</h4>
      </div>
      <div className={styles.content}>
        <p>{amount}</p>
        <span>{type}</span>
      </div>
    </li>
  );
};

export default Movement;
