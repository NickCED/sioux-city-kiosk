import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

export const WordSplitAnim = (element) => {
  const split = new SplitText(element, { type: 'chars' });
  const tl = gsap.timeline();
  const chars = split.chars;

  tl.fromTo(
    chars,
    { opacity: 0 },
    { duration: 0.5, opacity: 1, stagger: 0.05, ease: 'power2.inOut' }
  );

  return tl;
};
