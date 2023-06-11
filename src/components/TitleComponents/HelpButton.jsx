import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import Button from '../misc/Button';
import active from './assets/Help_active.png';
import inactive from './assets/Help_inactive.png';
import { IoCloseCircle } from 'react-icons/io5';
import './HelpButton.css';

HelpButton.propTypes = {
  onClick: PropTypes.func,
};

export default function HelpButton(props) {
  const helpDialog = useRef();
  const handleHelpClick = (e) => {
    helpDialog.current.showModal();
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
    <div className='help'>
      <Button
        style={{
          position: 'absolute',
        }}
        activeImage={active}
        defaultImage={inactive}
        altText='Help'
        onClick={handleHelpClick}
      />
      <dialog className='help-dialog' onClick={clickModal} ref={helpDialog}>
        <IoCloseCircle className='close-button' onClick={closeHelp} size={30} />

        <h4>
          Search by the different categories, or scroll and tap to explore
        </h4>
      </dialog>
    </div>
  );
}
