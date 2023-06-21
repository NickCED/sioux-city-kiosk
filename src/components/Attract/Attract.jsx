import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useLayoutEffect,
  createRef,
} from 'react';
import { navigationContext } from '../../App';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
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
gsap.registerPlugin(CustomEase);

export default function Attract(props) {
  //global page state for navigation and animation triggers
  const { page, setPage } = useContext(navigationContext);

  // variable to shut out touch while animating
  const [isClosing, setIsClosing] = useState(false);

  // Refs for each element
  const AttractRef = useRef(null);
  const AttractSequenceContRef = useRef(null);
  //====================================================================================================
  // Attract Slides Animation Setup

  const AttractBackBoxRefs = useRef([]);
  const AttractBoxRefs = useRef([]);
  const AttractImageRefs = useRef([]);
  const AttractTextRefs = useRef([]);
  const AttractTimeline = useRef(null);
  const MasterTimeline = useRef(null);
  const tempArray = [
    {
      img: cowboys,
      title: '1934 Sioux City Cowboys',
    },
    {
      img: FMorganTaylor,
      title: 'F. Morgan Taylor',
    },
    {
      img: Gateway,
      title: 'Gateway 2000 Soos',
    },
    {
      img: GeorgeHowardLambert,
      title: 'George Howard Lambert',
    },
    {
      img: LaurenLeftyBarnes,
      title: 'Lauren "Lefty" Barnes',
    },
    {
      img: SiouxCityBreeze,
      title: 'Sioux City Breeze',
    },
    {
      img: SiouxCityCountryClub,
      title: 'Sioux City Country Club',
    },
    {
      img: SiouxCityMusketeers,
      title: 'Sioux City Musketeers',
    },
    {
      img: SiouxCityRedbirds,
      title: 'Sioux City Redbirds',
    },
    {
      img: SiouxCitySpeedway,
      title: 'Sioux City Speedway',
    },
    {
      img: SueJonesBerens,
      title: 'Sue Jones Berens',
    },
    {
      img: SoosPark,
      title: 'Soos Park',
    },
    {
      img: StockYardsPark,
      title: 'Stock Yards Park',
    },
  ];

  // Ref for SlideAnimtion

  //Animation In for the Attract Screen
  //==========================================================//
  useEffect(() => {
    //================================================================//

    const AttractIn = () => {
      AttractTimeline.current = gsap.timeline({
        onComplete: () => {
          setIsClosing(false);
          animateObjects();
        },
      });
      AttractTimeline.current.fromTo(
        AttractRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.inOut' }
      );
    };
    AttractIn();
    //==========================================================//
    //==========================================================//
    //==========================================================//

    // variables
    const SlideDuration = 11;

    // colors for div backgrounds for Slide animation
    const colors = [
      '#81A9C3',
      '#845577',
      '#514269',
      '#CDADB8',
      '#FFD181',
      '#A34F61',
      '#C5D8E4',
    ];

    // Function to get random color from array
    const getRandomColor = () =>
      colors[Math.floor(Math.random() * colors.length)];

    // Function to get random color from array that is not the same as the color passed in
    const getOtherRandomColor = (color) => {
      let newColor = getRandomColor();
      while (newColor === color) {
        newColor = getRandomColor();
      }
      return newColor;
    };

    // Function to get random number between 650 and 800
    const getRandomHeight = () => Math.floor(Math.random() * (800 - 750) + 750);

    // Function to randomize array elements (Fisher-Yates algorithm)
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const animateObjects = () => {
      // Make sure refs are ready
      if (
        AttractBackBoxRefs.current &&
        AttractBoxRefs.current &&
        AttractImageRefs.current &&
        AttractTextRefs.current
      ) {
        // Use the shuffleArray function to randomize the order of the array indices
        const indices = Array.from(
          { length: AttractBoxRefs.current.length },
          (_, i) => i
        );
        const randomIndices = shuffleArray(indices);

        // Create a master timeline
        MasterTimeline.current = gsap.timeline({
          onComplete: () => {
            animateObjects();
          },
        });

        // Loop through each randomized index
        randomIndices.forEach((index) => {
          // Get the corresponding elements from each ref array
          const box = AttractBoxRefs.current[index];
          const img = AttractImageRefs.current[index];
          const text = AttractTextRefs.current[index];
          const backBox = AttractBackBoxRefs.current[index];

          // Set dimensions and position and styles
          const slideWidth = img.getBoundingClientRect().width;
          const textWidth = text.getBoundingClientRect().width;
          const randomColor = getRandomColor();
          const otherRandomColor = getOtherRandomColor(randomColor);
          box.style.backgroundColor = randomColor;
          backBox.style.backgroundColor = otherRandomColor;
          let boxHeight = getRandomHeight();
          box.style.height = `${boxHeight}px`;
          backBox.style.height = `${boxHeight - 200}px`;
          text.style.bottom = `${1080 - boxHeight - 150}px`;

          // GSAP Attract Slide animation
          let timeline = gsap.timeline();
          CustomEase.create(
            'custom',
            'M0,0,C0.048,0,0.077,0.384,0.226,0.448,0.376,0.512,0.654,0.5,0.772,0.548,0.89,0.596,0.95,1,1,1'
          );
          CustomEase.create(
            'custom3',
            'M0,0,C0.048,0,0.107,0.396,0.256,0.46,0.406,0.524,0.618,0.5,0.736,0.548,0.854,0.596,0.95,1,1,1'
          );
          // Slide in from offscreen right to center screen
          timeline.fromTo(
            backBox,
            { x: 1920 },
            {
              x: -slideWidth - 600,
              duration: SlideDuration + 0.75,
              ease: 'custom',
            },
            0
          );

          timeline.fromTo(
            box,
            { x: 2000 },
            {
              x: -slideWidth - 400,
              duration: SlideDuration,
              ease: 'custom3',
            },
            0.2
          );
          timeline.fromTo(
            img,
            { x: 1980 },
            {
              x: -slideWidth - 80,
              duration: SlideDuration,
              ease: 'custom3',
            },
            0.5
          );
          timeline.fromTo(
            text,
            { x: 2200 },
            {
              x: -textWidth - 800,
              duration: SlideDuration + 1.25,
              ease: 'custom3',
            },
            0.75
          );

          MasterTimeline.current.add(timeline, `>-1.75`);
        });

        // Return the master timeline
      }
    };

    // handle loading of images and setting divs to width based off images
    const currentImageRefs = AttractImageRefs.current;
    const handleLoad = (index) => {
      AttractBoxRefs.current[index].style.width = `${
        currentImageRefs[index].offsetWidth + 400
      }px`;
      AttractBackBoxRefs.current[index].style.width = `${
        currentImageRefs[index].offsetWidth + 600
      }px`;
    };

    currentImageRefs.forEach((ref, index) => {
      if (ref.complete) {
        handleLoad(index);
      } else {
        ref.addEventListener('load', () => handleLoad(index));
      }
    });

    //Clean up
    return () => {
      if (AttractTimeline.current) {
        AttractTimeline.current.kill();
      }
      if (MasterTimeline.current) {
        MasterTimeline.current.kill();
      }
      currentImageRefs.forEach((ref, index) => {
        if (ref) {
          ref.removeEventListener('load', () => handleLoad(index));
        }
      });
    };
  }, []);

  //Animation Out for the Attract Screen
  useEffect(() => {
    if (page !== 'Attract') {
      const AttractAnimOut = gsap.timeline({
        paused: true,
        onComplete: () => {
          setIsClosing(true);
          props.close();
        },
      });
      AttractAnimOut.to(AttractRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      });
      AttractAnimOut.play();
    }
  }, [page]);

  //====================================================================================================
  //Component Render

  return (
    <div id='Attract' ref={AttractRef} className={styles.Attract}>
      <div
        ref={AttractSequenceContRef}
        className={styles.AttractSequenceContainer}
      >
        {tempArray.map((slide, i) => {
          return (
            <React.Fragment key={i}>
              <div
                ref={(el) => (AttractBackBoxRefs.current[i] = el)}
                className={styles.AttractBackgroundBox}
              ></div>
              <div
                ref={(el) => (AttractBoxRefs.current[i] = el)}
                className={styles.AttractBox}
              ></div>
              <img
                ref={(el) => (AttractImageRefs.current[i] = el)}
                className={styles.AttractImage}
                src={slide.img}
                alt=''
              />
              <p
                ref={(el) => (AttractTextRefs.current[i] = el)}
                className={styles.AttractText}
              >
                {slide.title}
              </p>
            </React.Fragment>
          );
        })}
      </div>

      <div className={styles.attractGradient}></div>
      <p className={styles.TouchScreen}>TOUCH THE SCREEN TO START EXPLORING</p>
      <div className={styles.ComingSoon}></div>
      <p className={styles.ComingSoonText}>
        Interactive Database Coming Soon...
      </p>
    </div>
  );
}
