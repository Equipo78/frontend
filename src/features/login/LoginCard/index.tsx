import React, { FormEventHandler, useState } from 'react';
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

const LoginCard = (): JSX.Element => {
  const [isShowing, setIsShowing] = useState(true);
  const [inputValue, setInputValue] = useState<LoginType>(initialValue);
  const [errorMessage, setErrorMessage]: [string, (errorMessage: string) => void] = useState('');
  const [guest, setGuest] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const toggleShow = () => {
    setIsShowing((prev) => !prev);
  };

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;

    if (value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickSubmit: FormEventHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const loginSchemaSuccess = LoginSchema.safeParse(inputValue).success;
    const { email, password } = inputValue;

    try {
      const userData = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...userData }));
      setInputValue(initialValue);
      setErrorMessage('Login successful');
      localStorage.clear();
      localStorage.setItem('token', JSON.stringify(userData));
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error: any) {
      if (!loginSchemaSuccess) {
        setErrorMessage('Email and password are mandatory');
      } else if (error.status === 400 || error.status === 401) {
        setErrorMessage('Email and/or password are incorrect');
      } else if (error.status === 500) {
        setErrorMessage(error.data.message);
      }
    }
  };

  const handleGuestSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const guestEmail = 'guest2@gmail.com';
    const guestPassword = 'Guest123!@#';
    const guestValue = { email: guestEmail, password: guestPassword };

    setGuest(true);
    setInputValue(guestValue);
    setIsDisabled(false);
    setGuest(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5 className="header-b">Ingresá tus datos para comenzar</h5>
      </div>
      <form onSubmit={handleClickSubmit}>
        <div className={styles.inputGroup}>
          <input
            id="email"
            name="email"
            placeholder=" "
            type="text"
            value={guest ? 'guest2@gmail.com' : inputValue.email}
            onChange={handleInputValue}
          />
          <img alt="username" className={styles.svgInput} src={username} />
          <label htmlFor="username">Email</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            id="password"
            name="password"
            placeholder=" "
            type={isShowing ? 'password' : 'text'}
            value={guest ? 'Guest123!@#' : inputValue.password}
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
          <p className="error">{!isLoading ? errorMessage : 'Loading...'}</p>
          <button className={styles.primaryBtn} disabled={isDisabled} type="submit">
            INICIAR SESIÓN
          </button>
          <button className={styles.secondaryBtn} onClick={handleGuestSubmit}>
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
