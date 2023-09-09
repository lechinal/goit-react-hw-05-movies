import styles from './GoBack.module.css';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

export const GoBackButton = ({ onClick }) => {
  return (
    <div className={styles.backBtnDiv}>
      <button className={styles.backBtn} type="buton" onClick={onClick}>
        <MdOutlineKeyboardBackspace />
      </button>
    </div>
  );
};
