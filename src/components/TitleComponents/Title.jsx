import { useState, useLayoutEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import Button from '../misc/Button';
import styles from './Title.module.css';
import { stateObj, states } from '../titleStateObj';
import HelpButton from './HelpButton';
import HomeButton from './HomeButton';
import { WordSplitAnim } from '../functions/WordSplitAnim';
import { navigationContext } from '../../App';

const Title = (props) => {
  const { page, setPage } = useContext(navigationContext);
  const [title, setTitle] = useState('');
  const titleRef = useRef(null);

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

  const changeTitle = (state) => {
    gsap.to(titleRef.current, {
      duration: 0.5,
      y: 150,
      ease: 'power1.inOut',
      onComplete: () => {
        setTitle(stateObj[state].title);
        gsap.to(titleRef.current, {
          duration: 0.5,
          y: 0,
          ease: 'power1.inOut',
        });
      },
    });

    setPage(state);
  };

  const [yellowBoxState, setYellowBoxState] = useState('Attract');
  const [titleState, setTitleState] = useState(states[0]);

  return (
    <div className={styles.TitleBar}>
      <div ref={titleRef} id='TitleAnimation' className={styles.title}>
        {title}
      </div>
      <div
        id={styles.yellowBox}
        className={`styles.yellowBox${yellowBoxState}`}
      >
        <HelpButton />
        <HomeButton onClick={() => changeTitle('Home')} />
      </div>
    </div>
  );
};

export default Title;
