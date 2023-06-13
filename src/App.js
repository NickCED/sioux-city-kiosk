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
