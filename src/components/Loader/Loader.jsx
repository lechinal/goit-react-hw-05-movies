import React from 'react';
import styles from './Loader.module.css';

import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loaderContainer}>
      <ThreeCircles
        height="100"
        width="100"
        color="#dc8534"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  </div>
);

export default Loader;
