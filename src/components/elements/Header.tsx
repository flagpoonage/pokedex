import React from 'react';
import styles from './style/Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Pokedex</div>
      <Link className={styles.link} to="/pokemon-list/1">
        See Pokemon List
      </Link>
    </header>
  );
}
