import { useState } from 'react';
import cowboys from './TempAttract/1ef87bc2-a8aa-4480-bc0e-5f6a87df6af2.jfif';

import styles from './Attract.module.css';

export default function Attract(props) {
  const tempAttractObj = {
    1: {
      img: cowboys,
      title: '1934 Sioux City Cowboys',
      scale: 73,
    },
  };

  return (
    <div className={styles.Attract}>
      <img
        src={cowboys}
        alt=''
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div className={styles.attractGradient}></div>
    </div>
  );
}
