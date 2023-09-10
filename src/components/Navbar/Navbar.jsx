// import React from 'react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const location = useLocation();
  return (
    <main className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.element}>
          <NavLink
            to="/"
            activeclassname={styles.active}
            className={`${styles.navLink} ${
              location.pathname === '/' ? styles.active : ''
            }`}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.element}>
          <NavLink
            to="/Movies"
            activeclassname={styles.active}
            className={`${styles.navLink} ${
              location.pathname === '/Movies' ? styles.active : ''
            }`}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </main>
  );
};
