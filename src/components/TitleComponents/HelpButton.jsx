import { useRef, useLayoutEffect, useState, useEffect } from 'react';
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
  const buttonRef = useRef();
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

  useEffect(() => {
    gsap.fromTo(`.${styles.help}`, { y: 100 }, { y: 0, duration: 1 });
  }, []);

  return (
    <div id={props.id} className={styles.help}>
      <Button
        ref={buttonRef}
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
        <h2>Sioux City Public Museum Sports History Database</h2>
        <h3 className={styles.comingSoon}>
          This kiosk is currently under construction and is expected to be
          completed by the end of June.
        </h3>
        <h4>
          This database will contain information on athletes, teams, and venues
          from Sioux City’s rich sports history.
        </h4>

        <h5>
          If you have any questions or comments, please contact the Sioux City
          Public Museum at 712-279-6174 or by email at SCPM@sioux-city.org.
        </h5>
      </dialog>
    </div>
  );
}
