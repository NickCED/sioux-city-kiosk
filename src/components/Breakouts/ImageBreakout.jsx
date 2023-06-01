import React from 'react';
import Button from '../misc/Button';
import shadowImage from './assets/breakOutsBackground.png';
import leftActive from './assets/leftArrowActive.png';
import leftDefault from './assets/leftArrowDefault.png';
import rightActive from './assets/rightArrowActive.png';
import rightDefault from './assets/rightArrowDefault.png';
import exitActive from './assets/breakoutExitActive.png';
import exitDefault from './assets/breakoutExitDefault.png';
import BreakoutDots from './BreakoutDots';

export default function ImageBreakout(props) {
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);
  const [imageLength, setImageLength] = React.useState(5); // Replace 3 with the number of images in your breakout
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1920px',
    height: '970px',

    backgroundColor: '#303B3F',
    background: `url(${shadowImage}) no-repeat center top fixed`,
  };

  const handleLeftClick = () => {
    highlightedIndex === 0
      ? setHighlightedIndex(imageLength - 1)
      : setHighlightedIndex(highlightedIndex - 1);
  };
  const handleRightClick = () => {
    highlightedIndex === imageLength - 1
      ? setHighlightedIndex(0)
      : setHighlightedIndex(highlightedIndex + 1);
  };
  const handleExitClick = () => {
    console.log('Exit button clicked');
  };

  const handleDotClick = (index) => {
    setHighlightedIndex(index);
  };

  return (
    <div className='image-breakout' style={style}>
      <Button
        activeImage={leftActive}
        defaultImage={leftDefault}
        onClick={handleLeftClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '30px',
          transform: 'translateY(-50%)',
        }}
      />
      <Button
        activeImage={rightActive}
        defaultImage={rightDefault}
        onClick={handleRightClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: '30px',
          transform: 'translateY(-50%)',
        }}
      />
      <Button
        activeImage={exitActive}
        defaultImage={exitDefault}
        onClick={handleExitClick}
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
        }}
      />
      <BreakoutDots
        arrayLength={imageLength}
        highlightedIndex={highlightedIndex}
        onDotClick={handleDotClick}
      />

      <p className='caption'>{}</p>
    </div>
  );
}
