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

  const SlideDuration = 11;
  let slideObj = {};

  // Function to get random color from array
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

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

  function animateObjects() {
    // Make sure refs are ready
    if (
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
      const masterTimeline = gsap.timeline({
        repeat: -1,
      });

      // Loop through each randomized index
      randomIndices.forEach((index) => {
        // Get the corresponding elements from each ref array
        const box = AttractBoxRefs.current[index];
        const img = AttractImageRefs.current[index];
        const text = AttractTextRefs.current[index];

        // Set dimensions and position
        const slideWidth = img.getBoundingClientRect().width;
        const textWidth = text.getBoundingClientRect().width;
        box.style.backgroundColor = getRandomColor();
        let boxHeight = getRandomHeight();
        box.style.height = `${boxHeight}px`;
        text.style.bottom = `${1080 - boxHeight - 150}px`;

        // GSAP animation
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
          box,
          { x: 2000 },
          {
            x: -slideWidth - 200,
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
          { x: 1945 },
          {
            x: -textWidth - 100,
            duration: SlideDuration + 0.35,
            ease: 'custom3',
          },
          0.35
        );

        masterTimeline.add(timeline, `>-1.75`);
      });

      // Start the master animation
      masterTimeline.play();
    }
  }
  useEffect(() => {
    const AttractAnimIn = gsap.timeline({
      onComplete: () => {
        setIsClosing(false);
        animateObjects();
      },
    });
    AttractAnimIn.fromTo(
      AttractRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.inOut' }
    );
    AttractAnimIn.play();

    return () => {
      AttractAnimIn.kill();
    };
  }, []);

  //Animation In for the Attract Screen

  const { page, setPage } = useContext(navigationContext);

  const [isClosing, setIsClosing] = useState(false);

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
  const AttractBackgroundBoxRefs = useRef([]);
  const AttractBoxRefs = useRef([]);
  const AttractImageRefs = useRef([]);
  const AttractTextRefs = useRef([]);

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

  useEffect(() => {
    const currentImageRefs = AttractImageRefs.current;
    const handleLoad = (index) => {
      AttractBoxRefs.current[index].style.width = `${
        currentImageRefs[index].offsetWidth + 40
      }px`;
      gsap.set(currentImageRefs[index], { transformOrigin: 'left' });
    };

    currentImageRefs.forEach((ref, index) => {
      if (ref.complete) {
        handleLoad(index);
      } else {
        ref.addEventListener('load', () => handleLoad(index));
      }
    });

    return () => {
      currentImageRefs.forEach((ref, index) => {
        if (ref) {
          ref.removeEventListener('load', () => handleLoad(index));
        }
      });
    };
  }, []);

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
                rel={(el) => (AttractBackgroundBoxRefs.current[i] = el)}
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
