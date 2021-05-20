import "../styles/styles.css";
import 'lazysizes';
import MobileMenu from "./modules/MobileMenu"
import StickyHeader from './modules/StickyHeader.js'
import Particles from './modules/Particles.js';


let mobileMenu = new MobileMenu();
new StickyHeader();
new Particles()


if (module.hot) {
  module.hot.accept();
}


