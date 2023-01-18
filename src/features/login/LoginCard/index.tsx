import React, { FormEventHandler, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useDispatch } from 'react-redux';

import username from '../../../assets/misc-icons/username.svg';
import padlock from '../../../assets/misc-icons/padlock.svg';
import eyeShow from '../../../assets/misc-icons/eye-show.svg';
import eyeHide from '../../../assets/misc-icons/eye-hide.svg';
import { useLoginMutation } from '../authApiSlice';
import { setCredentials } from '../authSlice';

import styles from './styles.module.scss';

// add POST request
// add ZOD schema validation
// add LINKS
// add NAVIGATE to
// add Login as Visitor

const LoginSchema = z
  .object({
    email: z.string().min(1, { message: 'Usuario es obligatorio' }),
    password: z.string().min(1, { message: 'Clave es obligatoria' }),
  })
  .strict();

type LoginType = z.infer<typeof LoginSchema>;

const initialValue = {
  email: '',
  password: '',
};

const guestValue = {
  email: 'guest',
  password: 'guest123',
};

const LoginCard = (): JSX.Element => {
  const [isShowing, setIsShowing] = useState(true);
  const [inputValue, setInputValue] = useState<LoginType>(initialValue);
  const [errorMessage, setErrorMessage]: [string, (errorMessage: string) => void] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const toggleShow = () => {
    setIsShowing((prev) => !prev);
  };

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickSubmit: FormEventHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const loginSchemaSuccess = LoginSchema.safeParse(inputValue).success;
    const { email, password } = inputValue;

    if (!loginSchemaSuccess) {
      setErrorMessage('Email y clave son requeridos');
    } else {
      console.log('Good');
    }

    console.log('Before submit', inputValue);

    try {
      const userData = await login({ email, password }).unwrap();

      console.log('Unwrap:', userData);

      dispatch(setCredentials({ ...userData }));
      setInputValue(initialValue);
      navigate('/');
    } catch (err) {
      // err.status vs err.originalStatus
      if (!err) {
        // isLoading: true until timeout occurs
        setErrorMessage('No Server Response');
      } else if (err === 400) {
        setErrorMessage('Missing Username or Password');
      } else if (err === 401) {
        setErrorMessage('Unauthorized');
      } else {
        setErrorMessage('Login Failed');
      }
    }
  };

  const handleGuestSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setInputValue(guestValue);
    handleClickSubmit(event);
    console.log(inputValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5 className="header-b">Ingresá tus datos para comenzar</h5>
      </div>
      <form onSubmit={handleClickSubmit}>
        <div className={styles.inputGroup}>
          <input id="email" name="email" placeholder=" " type="text" onChange={handleInputValue} />
          <img alt="username" className={styles.svgInput} src={username} />
          <label htmlFor="username">Email</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            id="password"
            name="password"
            placeholder=" "
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
          <p className="error">{errorMessage}</p>
          <button className={styles.primaryBtn} type="submit">
            INICIAR SESIÓN
          </button>
          <button className={styles.secondaryBtn} onClick={() => handleGuestSubmit}>
            Guest
          </button>
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
