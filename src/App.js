import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import MainContent from './components/MainContent';
import Title from './components/Title';

function App() {
  return (
    <div className='App'>
      <MainContent />
      <Title />
    </div>
  );
}

export default App;
