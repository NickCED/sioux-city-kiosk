import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import { InertiaPlugin } from 'gsap/dist/InertiaPlugin';

import BounceButton from '../misc/BounceButton';
import auto from './assets/automobile.png';
import baseball from './assets/baseball.png';
import basketball from './assets/basketball.png';
import boat from './assets/boat.png';
import country from './assets/country.png';
import hockey from './assets/hockey.png';
import horseracing from './assets/horseracing.png';
import soccer from './assets/soccer.png';
import softball from './assets/softball.png';
import timeline from './assets/TimeLine.png';
import left from './assets/LEFTARROW.png';
import right from './assets/RIGHTARROW.png';

import './ProfessionalMain.css';

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function ProfessionalMain(props) {
  const [isClosing, setIsClosing] = useState(false);
  const scrollObj = useRef();
  const handleButtonClick = (e) => {
    console.log(e.target.id);
  };
  useEffect(() => {
    const scrollable = scrollObj.current;
    Draggable.create(scrollable, {
      type: 'x',
      edgeResistance: 0.65,
      bounds: { minX: -1045, maxX: 250 },
      inertia: true,
      zIndexBoost: false,
      throwProps: true,
      snap: {
        x: function (endValue) {
          return Math.round(endValue / 100) * 100;
        },
      },
    });
  }, []);

  useEffect(() => {
    gsap.set('#v1', {
      backgroundColor: '#F9F7F9',
      x: 0,
      y: '100%',
      height: '100%',
      width: '570px',
    });
    gsap.set('#h2', {
      x: '100%',
      y: 50,
      backgroundColor: '#0E558B',
      width: '100%',
      height: 525,
    });
    gsap.set('#h3', {
      x: '100%',
      y: 551,
      backgroundColor: '#81A9C3',
      width: '100%',
      height: 25,
    });
    gsap.set('#h4', {
      x: -845,
      y: 0,
      height: 30,
      width: 845,
      backgroundColor: '#442A598C',
    });
    gsap.set('#h5', {
      x: 550,
      y: 0,
      height: 30,
      width: 195,
      backgroundColor: '#FFFFFFD4',
    });
    gsap.set('.sportBtn', {
      opacity: 0,
    });
    gsap.to('.sportBtn', {
      opacity: 1,
      delay: 0.25,
      stagger: {
        each: 0.1,
        ease: 'power1.inOut',
      },
      duration: 0.75,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className='professional-main'>
      <div className='backgroundCont'>
        <div className='background' id='v1'></div>
        <div className='background' id='h2'></div>
        <div className='background' id='h3'></div>
        <div className='background' id='h4'></div>
        <div className='background' id='h5'></div>
      </div>
      <div className='scrollCont'>
        <div className='sportBtnCont' ref={scrollObj}>
          <BounceButton
            id='automobile'
            className='sportBtn'
            defaultImage={auto}
            altText=''
            onClick={handleButtonClick}
          ></BounceButton>
          <BounceButton
            id='baseball'
            className='sportBtn'
            defaultImage={baseball}
            altText=''
            onClick={handleButtonClick}
          ></BounceButton>
          <BounceButton
            id='basketball'
            className='sportBtn'
            defaultImage={basketball}
            altText=''
            onClick={handleButtonClick}
          ></BounceButton>
          <BounceButton
            id='hockey'
            className='sportBtn'
            defaultImage={hockey}
            altText=''
            onClick={handleButtonClick}
          ></BounceButton>
          <BounceButton
            id='horseracing'
            className='sportBtn'
            defaultImage={horseracing}
            altText=''
            onClick={handleButtonClick}
          ></BounceButton>
          <BounceButton
            id='soccer'
            className='sportBtn'
            defaultImage={soccer}
            altText=''
            onClick={handleButtonClick}
          ></BounceButton>
          <BounceButton
            id='softball'
            className='sportBtn'
            defaultImage={softball}
            altText=''
            onClick={handleButtonClick}
          ></BounceButton>
        </div>
        <BounceButton
          id='leftArrow'
          defaultImage={left}
          isPng={true}
          altText='left arrow'
          style={{
            transform: 'translate(50px, 308px)',
            zIndex: 20,
          }}
          onClick={handleButtonClick}
        ></BounceButton>
        <BounceButton
          id='rightArrow'
          defaultImage={right}
          isPng={true}
          altText='right arrow'
          style={{
            transform: 'translate(1829px, 308px)',
            zIndex: 20,
          }}
          onClick={handleButtonClick}
        ></BounceButton>
      </div>

      <div className='clubBtnCont'>
        <BounceButton
          id='boat'
          defaultImage={boat}
          altText='boat'
          style={{
            transform: 'translate(50px, 667px)',
          }}
          onClick={handleButtonClick}
        ></BounceButton>
        <BounceButton
          id='country'
          defaultImage={country}
          altText='country'
          style={{
            transform: 'translate(50px, 817px)',
          }}
          onClick={handleButtonClick}
        ></BounceButton>
        <BounceButton
          id='timeline'
          defaultImage={timeline}
          altText='timeline'
          style={{
            transform: 'translate(630px, 667px)',
          }}
          onClick={handleButtonClick}
        ></BounceButton>
      </div>
    </div>
  );
}
