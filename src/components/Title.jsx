import React from 'react';
import PropTypes from 'prop-types';
import Button from './misc/Button';
import HelpButton from './TitleComponents/HelpButton';

const Title = (props) => {
  const style = {
    position: 'absolute',
    top: 970,
    left: 0,
    width: '1920px',
    height: '110px',
    backgroundColor: 'rgba(254, 236, 209, 1)', // Replace with your desired background color
  };

  const states = [
    'Attract',
    'Home',
    'HOFSearch',
    'VenuesSearch',
    'ProfessionalSportsMain',
    'ProfessionalSportsTimeline',
    'ProfessionalSportsSearch',
    'SchoolsMain',
    'SchoolsSearch',
    'HOF',
    'School',
    'ProfessionalSport',
    'Venue',
  ];
  const stateObj = {
    Attract: {
      title: 'SIOUX CITY SPORTS HISTORY',
      subTitle: 'TOUCH THE SCREEN TO START EXPLORING',
      class: 'attractTitle',
      buttons: [],
    },
    Home: {
      title: '',
      subTitle: '',
      class: 'homeTitle',
      buttons: ['help'],
    },
    HOFSearch: {
      title: 'SPORTS HALL OF FAME',
      subTitle: '',
      class: 'HOFSearchTitle',
      buttons: ['help', 'home'],
    },
    VenuesSearch: {
      title: 'SPORTS VENUES',
      subTitle: '',
      class: 'VenuesSearchTitle',
      buttons: ['help', 'home'],
    },
    ProfessionalSportsMain: {
      title: 'PROFESSIONAL AND CLUB SPORTS',
      subTitle: '',
      class: 'ProfessionalSportsMainTitle',
      buttons: ['return', 'help', 'home'],
    },
    ProfessionalSportsTimeline: {
      title: 'PROFESSIONAL AND CLUB SPORTS',
      subTitle: '',
      class: 'ProfessionalSportsTimelineTitle',
      buttons: ['return', 'help', 'home'],
    },
    ProfessionalSportsSearch: {
      title: 'PROFESSIONAL AND CLUB SPORTS',
      subTitle: '',
      class: 'ProfessionalSportsSearchTitle',
      buttons: ['return', 'help', 'home'],
    },
    SchoolsMain: {
      title: 'HIGH SCHOOL & YOUNG ATHLETES',
      subTitle: '',
      class: 'SchoolsMainTitle',
      buttons: ['help', 'home'],
    },
    SchoolsSearch: {
      title: 'HIGH SCHOOL & YOUNG ATHLETES',
      subTitle: '',
      class: 'SchoolsSearchTitle',
      buttons: ['return', 'help', 'home'],
    },
    HOF: {
      title: 'SPORTS HALL OF FAME',
      subTitle: '',
      class: 'HOFTitle',
      buttons: ['backtosearch', 'help', 'home'],
    },
    Venue: {
      title: 'SPORTS VENUES',
      subTitle: '',
      class: 'VenueTitle',
      buttons: ['backtosearch', 'help', 'home'],
    },
    School: {
      title: 'HIGH SCHOOL & YOUNG ATHLETES',
      subTitle: '',
      class: 'SchoolTitle',
      buttons: ['backtoschools', 'help', 'home'],
    },
    ProfessionalSport: {
      title: 'PROFESSIONAL AND CLUB SPORTS',
      subTitle: '',
      class: 'ProfessionalSportTitle',
      buttons: ['backtosports', 'help', 'home'],
    },
  };

  const [titleState, setTitleState] = React.useState(states[0]);

  return (
    <div style={style}>
      <HelpButton />
    </div>
  );
};

export default Title;
