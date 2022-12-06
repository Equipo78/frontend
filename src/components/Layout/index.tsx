import React from 'react';
import { RoutesProps } from 'react-router-dom';

import Header from '../Header';
import Navbar from '../Navbar';

import styles from './styles.module.scss';

export const Layout = ({ children }: RoutesProps) => {
  return (
    <main className={styles.container}>
      <Header />
      <Navbar />
      {children}
    </main>
  );
};
