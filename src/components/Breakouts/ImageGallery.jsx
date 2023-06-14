import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styles from './ImageGallery.module.css';
import Image from './Image';

export default function ImageGallery(props) {
  const { entry } = props;
  const [entryStyle, setEntryStyle] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const [imageList, setImageList] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    setImageList(entry.images);
    setImageCount(entry.entry.images.length);
  }, [entry.images]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < imageCount - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage, imageCount]);

  useEffect(() => {
    if (imageList.length > 0) {
      setImageList(imageList);
    }
  }, [imageList]);
  useEffect(() => {
    switch (entry.entryType) {
      case 'Professional Team':
        setEntryStyle(styles.ProfessionalTeam);
        setImageList(entry.images);
        break;
      case 'School':
        setEntryStyle(styles.School);
        setImageList(entry.images);
        break;
      case 'Hall of Fame':
        setEntryStyle(styles.HallOfFame);
        setImageList(entry.images);
        break;
      case 'Venue':
        setEntryStyle(styles.Venue);
        setImageList(entry.images);
        break;
      default:
        setEntryStyle();
        setImageList(entry.images);
        break;
    }
  }, [entry.entryType]);

  return (
    <div className={`${styles.ImageGallery} ${entryStyle}`}>
      <div className={`${styles.HeaderBar} ${entryStyle}`}></div>
      <div className={`${styles.ImageContainer} ${entryStyle}`}>
        {entry.images.map((image, index) => {
          return (
            <Image className={styles.image} key={index} image={image}></Image>
          );
        })}
      </div>
      <div className={styles.FooterBar}></div>
    </div>
  );
}
