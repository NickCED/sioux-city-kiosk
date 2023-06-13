import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { navigationContext } from '../App';
import { states } from './titleStateObj';
import ImageBreakout from './Breakouts/ImageBreakout';
import HOFNav from './HallofFame/HOFNav';
import HOFEntries from './HallofFame/HOFEntries';
import Home from './Home/Home';
import ProfessionalMain from './ProfessionalMain/ProfessionalMain';

export default function MainContent(props) {
  const { page, setPage } = useContext(navigationContext);
  const [state, setState] = useState(states[0]); //
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
      {page === 'Home' && <Home />}
      {page === 'ProfessionalSports' && <ProfessionalMain />}
    </div>
  );
}
