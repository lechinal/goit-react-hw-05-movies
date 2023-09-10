import styles from './GoBack.module.css';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import PropTypes from 'prop-types';

export const GoBackButton = ({ onClick }) => {
  return (
    <div className={styles.backBtnDiv}>
      <button className={styles.backBtn} type="button" onClick={onClick}>
        <MdOutlineKeyboardBackspace />
      </button>
    </div>
  );
};

// prop-types

GoBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
