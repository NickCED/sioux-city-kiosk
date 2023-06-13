import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/all';

import PropTypes from 'prop-types';
import Button from '../misc/Button';
import active from './assets/Help_active.png';
import inactive from './assets/Help_inactive.png';
import { IoCloseCircle } from 'react-icons/io5';
import styles from './HelpButton.module.css';

gsap.registerPlugin(CSSRulePlugin);

HelpButton.propTypes = {
  onClick: PropTypes.func,
};

export default function HelpButton(props) {
  const helpDialog = useRef();
  const [isOn, setIsOn] = useState(false);
  const handleHelpClick = (e) => {
    helpDialog.current.showModal();
    setIsOn(true);
    gsap.fromTo(
      helpDialog.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.75, ease: 'power2.inOut' }
    );
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      helpDialog.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }, []);
  const clickModal = (e) => {
    const rect = helpDialog.current.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      closeHelp();
    }
  };

  const closeHelp = () => {
    setIsOn(false);
    gsap.fromTo(
      helpDialog.current,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => helpDialog.current.close(),
      }
    );
  };

  return (
    <div className={styles.help}>
      <Button
        activeImage={active}
        defaultImage={inactive}
        style={{
          position: 'unset',
        }}
        altText='Help'
        onClick={handleHelpClick}
      />
      <dialog
        className={`${styles.helpDialog}${isOn ? ` ${styles.on}` : ''}`}
        onClick={clickModal}
        ref={helpDialog}
      >
        <IoCloseCircle
          className={styles.closeButton}
          onClick={closeHelp}
          size={30}
        />

        <h4>
          Search by the different categories, or scroll and tap to explore
        </h4>
      </dialog>
    </div>
  );
}
