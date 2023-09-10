import React from 'react';
import styles from './NotFound.module.css';
import { GoBackButton } from 'components/GoBack/GoBack';
import { useNavigate } from 'react-router-dom';
import NotFoundImg from '../../images/notfoundPage.png';

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <GoBackButton onClick={handleGoBack} />
      <div className={styles.notFound}>
        <img className={styles.notFoundimg} src={NotFoundImg} alt="Not Found" />
      </div>
    </>
  );
}
