import vector from '../../assets/home-icons/balance-vector.png';

import styles from './styles.module.scss';

const BalanceCard = () => {
  return (
    <div className={styles.containerBalance}>
      <img alt="vector" className={styles.vector} src={vector} />

      <h5>Saldo</h5>

      <section>
        <h4>$ 45.000</h4>
      </section>
    </div>
  );
};

export default BalanceCard;
