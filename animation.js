import { gsap } from "./node_modules/gsap/all.js";
import { PixiPlugin } from "./node_modules/gsap/PixiPlugin.js";
import { MotionPathPlugin } from "./node_modules/gsap/MotionPathPlugin.js";
import { ScrollTrigger } from "./node_modules/gsap/ScrollTrigger.js";
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const items = document.querySelectorAll(".gsap_item");
items.forEach((item) => {
  gsap.from(item, {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top center",
      end: "bottom center",
      scrub: false,
    },
  });
});

// const items__contact = document.querySelectorAll(".gsap_item__contact");
// items__contact.forEach((item) => {
//   gsap.from(item, {
//     x: -10000,
//     opacity: 100,
//     duration: 1,
//     scrollTrigger: {
//       trigger: item,
//       start: "top center",
//       end: "bottom right",
//       scrub: true,
//     },
//   });
// });
