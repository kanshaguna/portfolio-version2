import "../styles/styles.css";
import 'lazysizes';
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js'
import Particles from './modules/Particles.js';


let mobileMenu = new MobileMenu();
new StickyHeader();
new Particles();
new Particles();
new RevealOnScroll(document.querySelectorAll(".skills--description"), 75)
new RevealOnScroll(document.querySelectorAll(".flex-container"), 75)
new RevealOnScroll(document.querySelectorAll(".mainBoxBlack--contactText"), 75)


if (module.hot) {
  module.hot.accept();
}


