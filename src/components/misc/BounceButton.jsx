import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
/**
 * A customizable button component.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.style - The inline styles for the button.
 * @param {string} props.defaultImage - The image source to display when the button is not active.
 * @param {string} props.altText - The alternate text for the button image.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} - A button element with an image.
 */

const BounceButton = (props) => {
  BounceButton.propTypes = {
    style: PropTypes.object,
    defaultImage: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };
  const imageId = props.id ? props.id : 'BounceButton';
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef();
  const buttonRef = useRef();
  const [yPos, setYPos] = useState(() => {
    if (props.style) {
      const y = props.style.transform
        ? props.style.transform.split(',')[1].split('px')[0]
        : 0;
      return y;
    }
    return 0;
  });

  const [isActive, setIsActive] = useState(false);
  const [style, setStyle] = useState(() => {
    let frameLessStyle = {
      border: 'none',
      background: 'none',
      padding: 0,
      overflow: 'hidden',
    };

    if (props.style) {
      frameLessStyle = {
        ...frameLessStyle,
        ...props.style,
        position: 'absolute',
      };
    }
    if (props.isPng) {
      frameLessStyle = {
        ...frameLessStyle,

        filter: 'drop-shadow(0px 10px 8px rgba(0, 0, 0, 0.25)) ',
      };
    } else {
      frameLessStyle = {
        ...frameLessStyle,
        borderRadius: '5px',
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 21px 18px -4px rgba(0, 0, 0, 0.25), inset 0px -6px 74px -16px #303B3F',
      };
    }
    return frameLessStyle;
  });

  useLayoutEffect(() => {
    const updatedStyle = {
      ...style,
      width: imgRef.current.width,
      height: imgRef.current.height,
    };
    setStyle(updatedStyle);
  }, [imgLoaded]);

  const handleClick = (e, _yPos) => {
    if (props.onClick) {
      props.onClick(e);
    }
    console.log(e);
    const yPos = _yPos;
    console.log('ypos', yPos);
    if (!props.isPng) {
      const clickAnim = gsap.timeline();
      clickAnim
        .fromTo(
          buttonRef.current,
          {
            y: yPos,
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 21px 18px -4px rgba(0, 0, 0, 0.25), inset 0px -6px 74px -16px #303B3F',
            scale: 1,
          },
          {
            y: '+=10',
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 18px -4px rgba(0, 0, 0, 0.25), inset 0px -6px 74px -16px #303B3F',
            scale: 0.99,
            duration: 0.1,
          }
        )
        .to(
          buttonRef.current,
          {
            y: yPos,
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 21px 18px -4px rgba(0, 0, 0, 0.25), inset 0px -6px 74px -16px #303B3F',
            scale: 1,
            duration: 0.1,
          },
          '>'
        );
    }
    if (props.isPng) {
      gsap.fromTo(
        buttonRef.current,
        {
          y: yPos,
          filter: 'drop-shadow(0px 10px 8px rgba(0, 0, 0, 0.25)) ',
          scale: 1,
        },
        {
          y: '+=10',
          filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25)) ',
          scale: 0.99,
          duration: 0.1,
          repeat: 1,
          yoyo: true,
        }
      );
    }
  };

  return (
    <button
      id={imageId}
      ref={buttonRef}
      style={style}
      className={props.className ? props.className + ' button' : 'button'}
      onClick={(e) => handleClick(e, yPos)}
      aria-pressed={isActive}
    >
      <img
        id={imageId + 'Img'}
        ref={imgRef}
        src={props.defaultImage}
        alt={props.altText}
        onLoad={() => {
          setImgLoaded(true);
        }}
      />
    </button>
  );
};

export default BounceButton;
