import React, { FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import * as z from 'zod';

import username from '../../assets/misc-icons/username.svg';
import padlock from '../../assets/misc-icons/padlock.svg';
import eyeShow from '../../assets/misc-icons/eye-show.svg';
import eyeHide from '../../assets/misc-icons/eye-hide.svg';

import styles from './styles.module.scss';

// add POST request
// add ZOD schema validation
// add LINKS
// add NAVIGATE to
// add Login as Visitor
// change Button hover

const SchemaLogin = z
  .object({
    username: z
      .string({
        required_error: 'Username is required',
      })
      .min(3, { message: 'Username must be at least 3 characters long' })
      .max(30),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(30),
  })
  .strict();

const Errors = (obj: any) => {
  if (!obj) return null;

  return <p className="error">{obj.errors[0]}</p>;
};

type LoginType = z.infer<typeof SchemaLogin>;

const initialValue = {
  username: '',
  password: '',
};

const guestValue = {
  username: 'guest',
  password: 'guest123',
};

const LoginCard = (): JSX.Element => {
  const [isShowing, setIsShowing] = useState(true);
  const [inputValue, setInputValue] = useState<LoginType>(initialValue);
  const [error, setError]: [string, (error: string) => void] = useState('');

  const result = SchemaLogin.safeParse(inputValue);
  const errors = !result.success ? result.error.flatten().fieldErrors : {};

  console.log(result);
  console.log(errors);
  console.log(errors.username ? errors.username[0] : null);

  const toggleShow = () => {
    setIsShowing((prev) => !prev);
  };

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickSubmit: FormEventHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log('Before submit', inputValue);
    let formData = new FormData();

    for (let value in inputValue) {
      if ((inputValue as { [key: string]: string })[value]) {
        formData.append(value, (inputValue as { [key: string]: string })[value] as unknown as Blob);
      }
    }
    const data = Object.fromEntries(formData);

    try {
      const validatedForm = SchemaLogin.parse(data);

      console.log('Try validatedForm', validatedForm);
    } catch (error) {
      console.log(error);
    }
    console.log('Submit');
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
          <input id="username" name="username" type="text" onChange={handleInputValue} />
          <img alt="username" className={styles.svgInput} src={username} />
          <label htmlFor="username">Usuario</label>
          <Errors errors={errors?.username} />
        </div>
        <div className={styles.inputGroup}>
          <input
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
          <Errors errors={errors?.password} />
        </div>
        <div className={styles.btnGroup}>
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
