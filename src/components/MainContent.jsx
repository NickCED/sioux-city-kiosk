import React from 'react';
import ImageBreakout from './Breakouts/ImageBreakout';
import SearchHOF from './HallofFame/SearchHOF';

const MainContent = () => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1920px',
    height: '970px',
    backgroundColor: 'white', // Replace with your desired background color
  };

  return (
    <div style={style}>
      <SearchHOF />
    </div>
  );
};

export default MainContent;
