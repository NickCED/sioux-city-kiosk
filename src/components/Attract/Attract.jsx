import { useState } from 'react';

import styles from './Attract.module.css';

export default function Attract(props) {
  return (
    <div className={styles.Attract}>
      <div className={styles.attractGradient}></div>
    </div>
  );
}
