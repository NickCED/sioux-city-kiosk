import { useState, useEffect, useContext } from 'react';
import styles from './HOFBreakout.module.css';
import ImageGallery from '../Breakouts/ImageGallery';
import Description from '../Breakouts/Description';
import NotableAchievements from './NotableAchievements';

export default function (props) {
  const { images, entry } = props;

  return (
    <div className={styles.HOFBreakout}>
      <p className={styles.HOFTitle}>{entry.Name}</p>
      <div className={styles.subTitle}>
        <p className={styles.inductionYear}>{entry.inductionYear}</p>
        <p className={styles.sport}>{entry.sport}</p>
      </div>
      <ImageGallery entry={entry}></ImageGallery>
      <Description entry={entry}></Description>
      <NotableAchievements entry={entry}></NotableAchievements>
    </div>
  );
}
