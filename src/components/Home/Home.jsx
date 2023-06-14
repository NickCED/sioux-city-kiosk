import { useEffect, useState, useContext } from 'react';
import { navigationContext } from '../../App';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import Button from '../misc/Button';
import HelpButton from '../TitleComponents/HelpButton';
import BounceButton from '../misc/BounceButton';
import HOF from './assets/SportsHallofFame.png';
import Venues from './assets/SportsVenues.png';
import ProfessionalSports from './assets/ProfessionalandClubSports.png';
import Schools from './assets/HighSchool&YoungAthletes.png';
import './Home.css';

Home.propTypes = {
  onClick: PropTypes.func,
};

/*
Notes:
- needs four buttons
- needs to be able to navigate to HOFSearch, VenuesSearch, ProfessionalSportsMain, SchoolsMain
- needs to be able to popup to Help 
*/

export default function Home(props) {
  const { page, setPage } = useContext(navigationContext);
  const [isClosing, setIsClosing] = useState(false);

  const handleButtonClick = (e) => {
    // console.log(e.target.id);
    // setIsClosing(true);
    // animOut(e.target.id);
  };

  const animOut = (imgClicked) => {
    let clicked;
    switch (imgClicked) {
      case 'HOF':
        clicked = 'HOFSearch';
        break;
      case 'Venues':
        clicked = 'VenuesSearch';
        break;
      case 'ProfessionalSports':
        clicked = 'ProfessionalSportsMain';
        break;
      case 'Schools':
        clicked = 'SchoolsMain';
        break;
      default:
        break;
    }

    const homeAnimOut = gsap.timeline({
      delay: 0.25,
      onComplete: () => {
        console.log('page changed', clicked);
        setPage(clicked);
        setIsClosing(false);
      },
    });
    homeAnimOut
      .to(
        [
          '#HOFButton',
          '#VenuesButton',
          '#ProfessionalSportsButton',
          '#SchoolsButton',
        ],
        {
          opacity: 0,
          duration: 0.5,
        }
      )
      .to(
        ['#v1', '#v2', '#v3', '#h4', '#h5'],
        {
          duration: 1,
          x: 1920,
          ease: 'sine.inOut',
        },
        '-=0.5'
      )
      .to(
        ['#h6'],
        {
          duration: 1,
          x: 3370,
          ease: 'sine.inOut',
        },
        '<'
      );
  };

  useEffect(() => {
    gsap.set('#v1', {
      opacity: 0.2,
      backgroundColor: '#84142C',
      x: 0,
      y: '100%',
      height: '100%',
      width: '470px',
    });
    gsap.set('#v2', {
      backgroundColor: '#303B3F1A',
      x: 370,
      y: 970,
      height: '790px',
      width: '1270px',
    });
    gsap.set('#v3', {
      backgroundColor: '#AF6E8457',
      x: 370,
      bottom: 790,
      height: 0,
      width: 100,
      zIndex: 5,
    });
    gsap.set('#h4', {
      backgroundColor: '#81A9C3 ',
      x: 1920,
      y: 0,
      height: 180,
      width: 1450,
    });
    gsap.set('#h5', {
      backgroundColor: '#002D5080',
      x: 1920,
      Y: 50,
      height: 130,
      width: 1920,
    });
    gsap.set('#h6', {
      backgroundColor: '#514269',
      right: 1450,
      y: 50,
      height: 130,
      width: 0,
    });

    gsap.set(
      [
        '#HOFButton',
        '#VenuesButton',
        '#ProfessionalSportsButton',
        '#SchoolsButton',
      ],
      {
        opacity: 0,
      }
    );
    const homeAnimIn = gsap.timeline();
    homeAnimIn
      .fromTo(
        '#v1',
        { y: '100%' },

        { y: 0, duration: 1.75, ease: 'sine.inOut', delay: 1 }
      )
      .fromTo(
        '#v2',
        { y: 970 },
        { y: 180, duration: 1.5, ease: 'none' },
        '>-=1.75'
      )
      .fromTo(
        '#v3',
        { height: 0 },
        { height: 50, duration: 0.5, ease: 'sine.out' },
        '>'
      )
      .fromTo(
        '#h4',
        { x: 1920 },
        { x: 470, duration: 2, ease: 'sine.out' },
        '1'
      )

      .fromTo(
        '#h5',
        { x: 1920, y: 50 },
        { x: 470, duration: 1, ease: 'none' },
        '>-1.5'
      )
      .fromTo(
        '#h6',
        { width: 0 },
        { width: 1450, duration: 1.5, ease: 'none' },
        '>'
      )
      .fromTo(
        [
          '#ProfessionalSportsButton',
          '#SchoolsButton',
          '#VenuesButton',
          '#HOFButton',
        ],
        { opacity: 0 },
        { opacity: 1, duration: 0.75, ease: 'sine.inOut', stagger: 0.25 },
        '>-1.25'
      );
  }, []);

  return (
    <div className={`Home ${isClosing ? 'disableClicks' : ''}`}>
      <div className='background' id='v1'></div>
      <div className='background' id='v2'></div>
      <div className='background' id='v3'></div>
      <div className='background' id='h4'></div>
      <div className='background' id='h5'></div>
      <div className='background' id='h6'></div>

      <BounceButton
        id='ProfessionalSports'
        style={{
          transform: 'translate(41px, 220px)',
          borderRadius: '5px',
        }}
        onClick={handleButtonClick}
        defaultImage={ProfessionalSports}
        altText='Professional and Club Sports Button'
      />
      <BounceButton
        id='HOF'
        style={{
          transform: 'translate(41px, 599px)',
          borderRadius: '5px',
        }}
        onClick={handleButtonClick}
        defaultImage={HOF}
        altText='Hall of Fame Button'
      />
      <BounceButton
        id='Venues'
        style={{
          transform: 'translate(979px, 599px)',
          borderRadius: '5px',
        }}
        onClick={handleButtonClick}
        defaultImage={Venues}
        altText='Sports Venues Button'
      />
      <BounceButton
        id='Schools'
        style={{
          transform: 'translate(979px, 220px)',
          borderRadius: '5px',
        }}
        onClick={handleButtonClick}
        defaultImage={Schools}
        altText='High School & Young Athletes Button'
      />
      <p id='comingSoon'>Coming Soon...</p>
    </div>
  );
}
