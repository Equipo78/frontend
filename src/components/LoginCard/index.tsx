import React, { FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';

import username from '../../assets/misc-icons/username.svg';
import padlock from '../../assets/misc-icons/padlock.svg';
import eyeShow from '../../assets/misc-icons/eye-show.svg';
import eyeHide from '../../assets/misc-icons/eye-hide.svg';

import styles from './styles.module.scss';

interface LoginInterface {
  username: string;
  password: string;
}

const initialValue = {
  username: '',
  password: '',
};

const LoginCard = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [inputValue, setInputValue] = useState<LoginInterface>(initialValue);

  const toggleShow = () => {
    setIsShowing((prev) => !prev);
  };

  const handleInputValue = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.currentTarget;

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5 className="header-b">Ingresá tus datos para comenzar</h5>
      </div>
      <form onSubmit={handleClickSubmit}>
        <div className={styles.inputGroup}>
          <input required id="username" name="username" type="text" onChange={handleInputValue} />
          <img alt="username" className={styles.svgInput} src={username} />
          <label htmlFor="username">Usuario</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            required
            id="password"
            name="password"
            type={isShowing ? 'password' : 'text'}
            onChange={handleInputValue}
          />
          <img alt="password" className={styles.svgInput} src={padlock} />
          <label htmlFor="password">Clave</label>
          {isShowing ? (
            <img alt="show" className={styles.svgPassword} src={eyeShow} onClick={toggleShow} />
          ) : (
            <img alt="hide" className={styles.svgPassword} src={eyeHide} onClick={toggleShow} />
          )}
        </div>
        <div className={styles.btnGroup}>
          <button type="submit">INICIAR SESIÓN</button>
        </div>
        <div className={styles.otherGroup}>
          <Link className="subtitle-b" to={'/forgot-password'}>
            ¿Olvidaste la contraseña?
          </Link>
          <Link className="subtitle-b" to={'/register'}>
            Registrarme
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
