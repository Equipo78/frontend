import LoginCard from '../components/LoginCard';
import Header from '../components/Header';
import TopLeft1 from '../assets/login-bg/TopLeft1.svg';
import TopLeft2 from '../assets/login-bg/TopLeft2.svg';
import TopRight1 from '../assets/login-bg/TopRight1.svg';
import TopRight2 from '../assets/login-bg/TopRight2.svg';
import Bottom1 from '../assets/login-bg/Bottom1.svg';
import Bottom2 from '../assets/login-bg/Bottom2.svg';
import CardPayment from '../assets/drawings/CardPayment.svg';
import Welcome from '../assets/drawings/Welcome.svg';

import styles from './Login.module.scss';

export const Login = () => {
  return (
    <div className={styles.container}>
      <Header />
      <img alt="SvgTopLeft1" className={styles.topLeftSvg} src={TopLeft1} />
      <img alt="SvgTopLeft2" className={styles.topLeftSvg} src={TopLeft2} />
      <img alt="SvgTopRight1" className={styles.topRightSvg} src={TopRight1} />
      <img alt="SvgTopRight2" className={styles.topRightSvg} src={TopRight2} />
      <img alt="SvgBottom1" className={styles.bottomSvg} src={Bottom1} />
      <img alt="SvgBottom2" className={styles.bottomSvg} src={Bottom2} />
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>¡Hola! Te damos la bienvenida a nuestro Home Banking</h2>
          <div className={styles.drawingContainers}>
            <img alt="CardPayment" className={styles.drawings} src={CardPayment} />
            <img alt="Welcome" className={styles.drawings} src={Welcome} />
          </div>
        </div>
        <div className={styles.loginContainer}>
          <LoginCard />
        </div>
      </div>
    </div>
  );
};

export default Login;
