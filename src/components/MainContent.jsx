import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { navigationContext } from '../App';
import { states } from './titleStateObj';
import Attract from './Attract/Attract';
import ImageBreakout from './Breakouts/ImageBreakout';
import HOFNav from './HallofFame/HOFNav';
import HOFEntries from './HallofFame/HOFEntries';
import Home from './Home/Home';
import ProfessionalMain from './ProfessionalMain/ProfessionalMain';
import ProfessionalSportsTimeline from './Timeline/ProfessionalSportsTimeline';

export default function MainContent(props) {
  const { page, setPage } = useContext(navigationContext);
  const [state, setState] = useState(states[0]); //
  const [attractOpen, setAttractOpen] = useState(true); // Attract screen state
  const [homeOpen, setHomeOpen] = useState(false); // Home button state

  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1920px',
    height: '970px',
    backgroundColor: 'white', // Replace with your desired background color
  };
  useEffect(() => {
    switch (page) {
      case 'Attract':
        setAttractOpen(true);
        break;
      case 'Home':
        setHomeOpen(true);
        break;
      default:
        break;
    }
  }, [page]);

  const close = (targetPage) => {
    switch (targetPage) {
      case 'Attract':
        setAttractOpen(false);
        break;
      case 'Home':
        setHomeOpen(false);
        break;
      default:
    }
  };

  return (
    <div style={style}>
      {/* <HOFNav /> */}
      {/* <HOFEntries /> */}
      {attractOpen && <Attract close={() => close('Attract')} />}
      {homeOpen && <Home close={() => close('Home')} />}
      {page === 'ProfessionalSportsMain' && <ProfessionalMain />}
      {page === 'ProfessionalSportsTimeline' && <ProfessionalSportsTimeline />}
    </div>
  );
}
