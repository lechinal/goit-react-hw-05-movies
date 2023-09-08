import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            activeClassName={styles.active}
            className={`${styles.navLink} ${
              location.pathname === '/' ? styles.active : ''
            }`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MoviesPage"
            activeClassName={styles.active}
            className={`${styles.navLink} ${
              location.pathname === '/MoviesPage' ? styles.active : ''
            }`}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
