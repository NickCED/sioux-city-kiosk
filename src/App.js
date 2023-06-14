import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import { getImages } from './components/functions/DatabaseFuncs/images';
import MainContent from './components/MainContent';
import Title from './components/TitleComponents/Title';

import React from 'react';
export const navigationContext = React.createContext('Attract');

function App() {
  const [page, setPage] = React.useState('Attract');
  const TimeoutSeconds = 50;
  const inactivityTimeout = TimeoutSeconds * 1000;
  let inactivityTimer = null;

  const resetTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(handleInactivity, inactivityTimeout);
  };
  const handleInactivity = () => {
    console.log('inactivity: ' + page + ' -> Attract');
    if (page !== 'Attract') {
      setPage('Attract');
      console.log('inactivity');
    }
  };
  const handleTouch = () => {
    if (page === 'Attract') {
      setPage('Home');
    }
    resetTimer();
    console.log('click');
  };
  useEffect(() => {
    inactivityTimer = setTimeout(handleInactivity, inactivityTimeout);
    // document.addEventListener('touchstart', handleTouch);
    document.addEventListener('click', handleTouch);

    return () => {
      clearTimeout(inactivityTimer);
      // document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('click', handleTouch);
    };
  }, [page]);

  return (
    <navigationContext.Provider value={{ page, setPage }}>
      <div className='App'>
        <MainContent />
        <Title />
      </div>
    </navigationContext.Provider>
  );
}

export default App;
