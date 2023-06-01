import React from 'react';

export default function BreakoutDots(props) {
  const dotSize = 25; // Diameter of the dot
  const gapSize = 25; // Gap between dots
  const totalSize = dotSize + gapSize; // Total size of each dot and gap

  const dots = Array.from({ length: props.arrayLength }, (_, index) => {
    const isHighlighted = index === props.highlightedIndex;
    const dotStyle = {
      width: dotSize,
      height: dotSize,
      borderRadius: '50%',
      backgroundColor: isHighlighted ? 'white' : '#4A5457',
      margin: gapSize / 2,
      transition: 'background-color 0.5s ease',
    };
    const handleDotClick = (index) => {
      props.onDotClick(index);
    };

    return (
      <div key={index} style={dotStyle} onClick={() => handleDotClick(index)} />
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',

        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {dots}
    </div>
  );
}
