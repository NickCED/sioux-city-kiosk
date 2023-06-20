import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef((props, ref) => {
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
      ref={ref}
    >
      <img
        src={isActive ? props.activeImage : props.defaultImage}
        alt={props.altText}
      />
    </button>
  );
});

export default Button;
