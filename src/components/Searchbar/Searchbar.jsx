import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import styles from './Searchbar.module.css';

export const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const query = value.trim();
    if (query) {
      onSearch(query);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        className={styles.searchInput}
        placeholder="Search for movies..."
      />
      <button type="submit" className={styles.searchBtn}>
        <GoSearch />
      </button>
    </form>
  );
};
