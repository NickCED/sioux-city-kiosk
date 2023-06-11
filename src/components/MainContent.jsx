import React from 'react';
import ImageBreakout from './Breakouts/ImageBreakout';
import HOFNav from './HallofFame/HOFNav';
import HOFEntries from './HallofFame/HOFEntries';
import Home from './Home/Home';

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
      {/* <HOFNav /> */}
      {/* <HOFEntries /> */}
      <Home />
    </div>
  );
};

export default MainContent;
