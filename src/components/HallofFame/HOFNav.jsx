import './HOFNav.css';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function HOFNav(props) {
  const [selected, setSelected] = useState('inductYear');
  const highlight = useRef();
  const inductYear = useRef();
  const athlete = useRef();
  const sport = useRef();
  const buttons = [inductYear, athlete, sport];
  const highlightPositions = {
    inductYear: 91,
    athlete: 376,
    sport: 670,
  };

  useEffect(() => {
    gsap.set(highlight.current, {
      y: highlightPositions[selected],
    });
    buttons.forEach((button) => {
      gsap.set(button.current, {
        backgroundColor:
          selected === button.current.className ? '#81A9C3' : '#0e558b',
      });
    });
  }, []);

  const handleOptionSelect = (e) => {
    setSelected(e.target.className);
    gsap.to(highlight.current, {
      duration: 0.5,
      y: highlightPositions[e.target.className],
      ease: 'power3.out',
    });
    buttons.forEach((button) => {
      gsap.to(button.current, {
        duration: 0.5,

        backgroundColor:
          e.target.className === button.current.className
            ? '#81A9C3'
            : '#0e558b',
        ease: 'power3.out',
      });
    });
    if (props.onSetSearchOption) {
      props.onSetSearchOption(e.target.className);
    }
  };

  return (
    <nav className='HOFNav'>
      <div className='selectorHighlight' ref={highlight}></div>
      <p className='SearchOptions Demi'>SEARCH OPTIONS</p>
      <button
        className='inductYear'
        ref={inductYear}
        onClick={handleOptionSelect}
      >
        SEARCH BY INDUCTION YEAR
      </button>
      <button className='athlete' ref={athlete} onClick={handleOptionSelect}>
        SEARCH BY ATHLETE NAME
      </button>
      <button className='sport' ref={sport} onClick={handleOptionSelect}>
        SEARCH BY SPORT/ CATEGORY
      </button>
    </nav>
  );
}
