import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = () => {
  // Slide from Left
  gsap.utils.toArray(".slide-left").forEach(el => {
    gsap.from(el, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  // Slide from Right
  gsap.utils.toArray(".slide-right").forEach(el => {
    gsap.from(el, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  // Slide from Top
  gsap.utils.toArray(".slide-top").forEach(el => {
    gsap.from(el, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  // Slide from Bottom
  gsap.utils.toArray(".slide-bottom").forEach(el => {
    gsap.from(el, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });
};
