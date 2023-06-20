import {
  useEffect,
  useState,
  useContext,
  useRef,
  useLayoutEffect,
} from 'react';
import { navigationContext } from '../../App';
import { gsap } from 'gsap';
import cowboys from './TempAttract/1ef87bc2-a8aa-4480-bc0e-5f6a87df6af2.jfif';
import FMorganTaylor from './TempAttract/FMorganTaylor.jfif';
import Gateway from './TempAttract/Gateway2000Soos.jfif';
import GeorgeHowardLambert from './TempAttract/GeorgeHowardLambert.jfif';
import LaurenLeftyBarnes from './TempAttract/LaurenLeftyBarnes.jfif';
import SiouxCityBreeze from './TempAttract/SiouxCityBreeze.jfif';
import SiouxCityCountryClub from './TempAttract/SiouxCityCountryClub.jfif';
import SiouxCityMusketeers from './TempAttract/SiouxCityMusketeers.jfif';
import SiouxCityRedbirds from './TempAttract/SiouxCityRedbirds.jfif';
import SiouxCitySpeedway from './TempAttract/SiouxCitySpeedway.jfif';
import SueJonesBerens from './TempAttract/SueJonesBerens.jfif';
import SoosPark from './TempAttract/SoosPark.jfif';
import StockYardsPark from './TempAttract/StockYardsPark.jfif';

import styles from './Attract.module.css';
gsap.registerPlugin();

export default function Attract(props) {
  const tempAttractObj = {
    1: {
      img: cowboys,
      title: '1934 Sioux City Cowboys',
    },
    2: {
      img: FMorganTaylor,
      title: 'F. Morgan Taylor',
    },
    3: {
      img: Gateway,
      title: 'Gateway 2000 Soos',
    },
    4: {
      img: GeorgeHowardLambert,
      title: 'George Howard Lambert',
    },
    5: {
      img: LaurenLeftyBarnes,
      title: 'Lauren "Lefty" Barnes',
    },
    6: {
      img: SiouxCityBreeze,
      title: 'Sioux City Breeze',
    },
    7: {
      img: SiouxCityCountryClub,
      title: 'Sioux City Country Club',
    },
    8: {
      img: SiouxCityMusketeers,
      title: 'Sioux City Musketeers',
    },
    9: {
      img: SiouxCityRedbirds,
      title: 'Sioux City Redbirds',
    },
    10: {
      img: SiouxCitySpeedway,
      title: 'Sioux City Speedway',
    },
    11: {
      img: SueJonesBerens,
      title: 'Sue Jones Berens',
    },
    12: {
      img: SoosPark,
      title: 'Soos Park',
    },
    13: {
      img: StockYardsPark,
      title: 'Stock Yards Park',
    },
  };
  const colors = [
    '#81A9C3',
    '#845577',
    '#514269',
    '#CDADB8',
    '#FFD181',
    '#A34F61',
    '#C5D8E4',
  ];
  const AttractRef = useRef(null);
  const AttractSequenceContRef = useRef(null);
  const cowboysBoxRef = useRef(null);
  const cowboysRef = useRef(null);
  const cowboysTextRef = useRef(null);
  const FMorganTaylorBoxRef = useRef(null);
  const FMorganTaylorRef = useRef(null);
  const FMorganTaylorTextRef = useRef(null);
  const GatewayboxRef = useRef(null);
  const GatewayRef = useRef(null);
  const GatewayTextRef = useRef(null);
  const GeorgeHowardLambertBoxRef = useRef(null);
  const GeorgeHowardLambertRef = useRef(null);
  const GeorgeHowardLambertTextRef = useRef(null);
  const LaurenLeftyBarnesBoxRef = useRef(null);
  const LaurenLeftyBarnesRef = useRef(null);
  const LaurenLeftyBarnesTextRef = useRef(null);
  const SiouxCityBreezeBoxRef = useRef(null);
  const SiouxCityBreezeRef = useRef(null);
  const SiouxCityBreezeTextRef = useRef(null);
  const SiouxCityCountryClubBoxRef = useRef(null);
  const SiouxCityCountryClubRef = useRef(null);
  const SiouxCityCountryClubTextRef = useRef(null);
  const SiouxCityMusketeersBoxRef = useRef(null);
  const SiouxCityMusketeersRef = useRef(null);
  const SiouxCityMusketeersTextRef = useRef(null);
  const SiouxCityRedbirdsBoxRef = useRef(null);
  const SiouxCityRedbirdsRef = useRef(null);
  const SiouxCityRedbirdsTextRef = useRef(null);
  const SiouxCitySpeedwayBoxRef = useRef(null);
  const SiouxCitySpeedwayRef = useRef(null);
  const SiouxCitySpeedwayTextRef = useRef(null);
  const SueJonesBerensBoxRef = useRef(null);
  const SueJonesBerensRef = useRef(null);
  const SueJonesBerensTextRef = useRef(null);
  const SoosParkBoxRef = useRef(null);
  const SoosParkRef = useRef(null);
  const SoosParkTextRef = useRef(null);
  const StockYardsParkBoxRef = useRef(null);
  const StockYardsParkRef = useRef(null);
  const StockYardsParkTextRef = useRef(null);
  const SlideDuration = 2;
  let slideObj = {};

  // Function to get random color from array
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  // Function to get random number between 650 and 800
  const getRandomHeight = () => Math.floor(Math.random() * (800 - 650) + 650);

  // Function to randomize array elements (Fisher-Yates algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function animateObjects() {
    // Randomize the order of the keys
    const keys = Object.keys(slideObj);
    const randomKeys = shuffleArray(keys);

    // Create a master timeline
    const masterTimeline = gsap.timeline();

    // Loop through each randomized key
    randomKeys.forEach((key, index) => {
      console.log(key);
      let slide = slideObj[key];

      // Set dimensions and position
      console.log(slide.img);
      let slideRect;
      if (slide.img && slide.img instanceof Element) {
        slideRect = slide.img.getBoundingClientRect();
      }
      let slideWidth = slideRect.width;
      slide.box.style.width = `${slideWidth + 40}px`;
      slide.box.style.backgroundColor = getRandomColor();
      let boxHeight = getRandomHeight();
      slide.box.style.height = `${boxHeight}px`;
      slide.text.style.bottom = `${1080 - boxHeight + 1}rem`;

      // GSAP animation
      let timeline = gsap.timeline();

      // Slide in from offscreen right to center screen

      timeline.fromTo(
        slide.box,
        { x: 2000 },
        {
          x: 860 - slideWidth / 2,
          duration: SlideDuration,
          ease: 'power2.out',
        }
      );
      timeline.fromTo(
        slide.img,
        { x: 2000 },
        {
          x: 960 - slideWidth / 2,
          duration: SlideDuration,
          ease: 'power3.out',
        },
        0
      ); // animate at the same time as box
      timeline.fromTo(
        slide.text,
        { x: 2000 },
        {
          x: 880 - slideWidth / 2,
          duration: SlideDuration,
          ease: 'power2.out',
        },
        0
      ); // animate at the same time as box

      // Then animate off screen left in a parallax style
      timeline.to(
        slide.box,
        { x: -2000, duration: SlideDuration, ease: 'power2.in' },
        '>+.25'
      );
      timeline.to(
        slide.img,
        { x: -2000, duration: SlideDuration, ease: 'power2.in' },
        '<'
      ); // move faster for parallax effect
      timeline.to(
        slide.text,
        { x: -2000, duration: SlideDuration, ease: 'power2.in' },
        '<'
      ); // move slower for parallax effect

      // Add this animation to the master timeline, with a stagger
      masterTimeline.add(timeline, `>${SlideDuration - 0.25}`);
    });

    // Start the master animation
    masterTimeline.play();
  }

  useEffect(() => {
    // timer to start animation

    slideObj = {
      cowboys: {
        box: cowboysBoxRef.current,
        img: cowboysRef.current,
        text: cowboysTextRef.current,
      },
      FMorganTaylor: {
        box: FMorganTaylorBoxRef.current,
        img: FMorganTaylorRef.current,
        text: FMorganTaylorTextRef.current,
      },
      Gateway: {
        box: GatewayboxRef.current,
        img: GatewayRef.current,
        text: GatewayTextRef.current,
      },
      GeorgeHowardLambert: {
        box: GeorgeHowardLambertBoxRef.current,
        img: GeorgeHowardLambertRef.current,
        text: GeorgeHowardLambertTextRef.current,
      },
      LaurenLeftyBarnes: {
        box: LaurenLeftyBarnesBoxRef.current,
        img: LaurenLeftyBarnesRef.current,
        text: LaurenLeftyBarnesTextRef.current,
      },
      SiouxCityBreeze: {
        box: SiouxCityBreezeBoxRef.current,
        img: SiouxCityBreezeRef.current,
        text: SiouxCityBreezeTextRef.current,
      },
      SiouxCityCountryClub: {
        box: SiouxCityCountryClubBoxRef.current,
        img: SiouxCityCountryClubRef.current,
        text: SiouxCityCountryClubTextRef.current,
      },
      SiouxCityMusketeers: {
        box: SiouxCityMusketeersBoxRef.current,
        img: SiouxCityMusketeersRef.current,
        text: SiouxCityMusketeersTextRef.current,
      },
      SiouxCityRedbirds: {
        box: SiouxCityRedbirdsBoxRef.current,
        img: SiouxCityRedbirdsRef.current,
        text: SiouxCityRedbirdsTextRef.current,
      },
      SiouxCitySpeedway: {
        box: SiouxCitySpeedwayBoxRef.current,
        img: SiouxCitySpeedwayRef.current,
        text: SiouxCitySpeedwayTextRef.current,
      },
      SueJonesBerens: {
        box: SueJonesBerensBoxRef.current,
        img: SueJonesBerensRef.current,
        text: SueJonesBerensTextRef.current,
      },
      SoosPark: {
        box: SoosParkBoxRef.current,
        img: SoosParkRef.current,
        text: SoosParkTextRef.current,
      },
      StockYardsPark: {
        box: StockYardsParkBoxRef.current,
        img: StockYardsParkRef.current,
        text: StockYardsParkTextRef.current,
      },
    };

    const AttractAnimIn = gsap.timeline({
      paused: true,
      onComplete: () => {
        setIsClosing(false);
      },
    });
    AttractAnimIn.fromTo(
      AttractRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.inOut' }
    );
    AttractAnimIn.play();
  }, []);

  useLayoutEffect(() => {
    animateObjects();
  }, []);

  const { page, setPage } = useContext(navigationContext);
  const [attractObj, setAttractObj] = useState(tempAttractObj[1]);
  const [isClosing, setIsClosing] = useState(false);

  const AttractAnimOut = gsap.timeline({
    paused: true,
    onComplete: () => {
      setIsClosing(true);
      props.close();
    },
  });
  AttractAnimOut.to(AttractRef, {
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut',
  });

  useEffect(() => {
    if (page !== 'Attract') {
      AttractAnimOut.play();
    }
  }, [page]);

  return (
    <div id='Attract' ref={AttractRef} className={styles.Attract}>
      <div
        ref={AttractSequenceContRef}
        className={styles.AttractSequenceContainer}
      ></div>

      <div className={styles.attractGradient}></div>
      <p className={styles.TouchScreen}>TOUCH THE SCREEN TO START EXPLORING</p>
      <div className={styles.ComingSoon}></div>
      <p className={styles.ComingSoonText}>
        Interactive Database Coming Soon...
      </p>
    </div>
  );
}
