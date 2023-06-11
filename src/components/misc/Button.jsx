import React, { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * A customizable button component.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.style - The inline styles for the button.
 * @param {string} props.activeImage - The image source to display when the button is active.
 * @param {string} props.defaultImage - The image source to display when the button is not active.
 * @param {string} props.altText - The alternate text for the button image.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} - A button element with an image.
 */

const Button = (props) => {
  Button.propTypes = {
    style: PropTypes.object,
    activeImage: PropTypes.string.isRequired,
    defaultImage: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };
  const [isActive, setIsActive] = useState(false);
  const [style, setStyle] = useState(() => {
    if (props.style) {
      const frameLessStyle = {
        ...props.style,
        border: 'none',
        background: 'none',
        padding: 0,
      };
      return frameLessStyle;
    }
    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    };
  });
  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
    }
    setIsActive(!isActive);
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  };

  return (
    <button
      style={style}
      className='button'
      onClick={handleClick}
      aria-pressed={isActive}
    >
      <img
        src={isActive ? props.activeImage : props.defaultImage}
        alt={props.altText}
      />
    </button>
  );
};

export default Button;
