import {
  useState,
  useLayoutEffect,
  useRef,
  useContext,
  useEffect,
} from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import Button from '../misc/Button';
import styles from './Title.module.css';
import { stateObj, states } from '../titleStateObj';
import HelpButton from './HelpButton';
import HomeButton from './HomeButton';
import { WordSplitAnim } from '../functions/WordSplitAnim';
import { navigationContext } from '../../App';

export default function Title(props) {
  const { page, setPage } = useContext(navigationContext);
  const [title, setTitle] = useState('');
  const titleRef = useRef(null);
  const [currentPage, setCurrentPage] = useState('Attract');
  const attractTitleRef = useRef(null);
  const helpRef = useRef(null);
  const [showHelp, setShowHelp] = useState(false);

  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 150 },
      {
        delay: 0.5,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  }, []);

  const handleHomeClick = (e) => {
    setPage('Home');
  };

  const changeTitle = (page) => {
    if (page === currentPage) return;
    if (page === 'Attract') {
      console.log('attracttitle');
      gsap.set(attractTitleRef.current, { y: 0 });
    } else {
      gsap.set(attractTitleRef.current, { y: 132 });
    }

    if (page === 'Home') {
      setYellowBoxState('Home');
      gsap.to('#helpButtonCont', {
        duration: 0.5,
        delay: 0.75,
        scale: 0.8,
        ease: 'power1.inOut',
      });
    } else if (page === 'Attract') {
      setYellowBoxState('Attract');
    } else {
      gsap.to('#helpButtonCont', {
        duration: 0.5,
        delay: 0.75,
        scale: 0.8,
        ease: 'power1.inOut',
      });
      setYellowBoxState('Pages');
    }

    gsap.to(titleRef.current, {
      duration: 0.5,
      y: 150,
      ease: 'power1.inOut',
      onComplete: () => {
        setTitle(stateObj[page].title);
        gsap.to(titleRef.current, {
          duration: 0.5,
          y: 0,
          ease: 'power1.inOut',
        });
      },
    });
    setCurrentPage(page);
  };

  useEffect(() => {
    changeTitle(page);
  }, [page]);

  const [yellowBoxState, setYellowBoxState] = useState('Attract');
  const [titleState, setTitleState] = useState(states[0]);

  return (
    <div className={styles.TitleBar}>
      <div ref={titleRef} id='TitleAnimation' className={styles.title}>
        {title}
      </div>
      <div
        id={styles.yellowBox}
        className={`${styles.yellowBox} ${styles[yellowBoxState]}`}
      >
        {page !== 'Attract' && <HelpButton id='helpButtonCont' />}
        {page !== 'Home' ? (
          page !== 'Attract' ? (
            <HomeButton onClick={handleHomeClick} />
          ) : null
        ) : null}
      </div>
      <div ref={attractTitleRef} className={styles.attractTitle}>
        <p className={`${styles.attractTitleText}  ${styles.first}`}>
          SIOUX CITY
        </p>
        <p className={`${styles.attractTitleText}  ${styles.second}`}>
          SPORTS HISTORY
        </p>
      </div>
    </div>
  );
}
